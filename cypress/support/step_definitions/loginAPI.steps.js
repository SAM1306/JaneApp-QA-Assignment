import BaseAPIAction from '../../pages/backend/BaseAPIAction'
import LoginAPIAction from '../../pages/backend/LoginAPIAction'

const loginAPIAction = new LoginAPIAction()
const baseAPIAction = new BaseAPIAction()

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('login endpoint is prepared', () => {
    cy.wrap('/login').as('loginEndpoint') // Store endpoint for later use
})

When('a manager logs in with its {string} and {string}', (username, password) => {
    const credentials = { username, password }
    cy.get('@loginEndpoint').then((endpoint) => {
        loginAPIAction.login(endpoint, credentials).then((response) => {
            cy.wrap(response).as('loginResponse') // Save response for validations
        })
    })
})
  
Then('the response status should be {int}', (expectedStatus) => {
    cy.get('@loginResponse').then((response) => {
        baseAPIAction.validateAPIResponseStatusCode(response, expectedStatus)
    })
})
  
Then('a token should {string} be returned', (tokenExpected) => {
    const shouldHaveToken = tokenExpected === 'true'
    cy.get('@loginResponse').then((response) => {
        if (shouldHaveToken) {
            baseAPIAction.validateResponseToHaveProperty(response.body, 'token', 'Token validation')
        } else {
            baseAPIAction.validateResponseNotToHaveProperty(response.body, 'token')
        }
    })
})
