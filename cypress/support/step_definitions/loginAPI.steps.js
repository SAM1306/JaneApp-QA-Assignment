import * as BaseAPIAction from '../../pages/backend/BaseAPIAction'
import * as LoginAPIAction from '../../pages/backend/LoginAPIAction'

Given('/login endpoint is prepared', () => {
    cy.wrap('/login').as('loginEndpoint') // Store endpoint for later use
})

When('a manager logs in with its {username} and {password}', (username, password) => {
    const credentials = { username, password }
    cy.get('@loginEndpoint').then((endpoint) => {
        LoginAPIAction.login(endpoint, credentials).then((response) => {
            cy.wrap(response).as('loginResponse') // Save response for validations
        })
    })
})
  
Then('the response status should be {expectedStatus}', (expectedStatus) => {
    cy.get('@loginResponse').then((response) => {
        BaseAPIAction.validateResponseStatus(response, expectedStatus)
    })
})
  
Then('a token should {string} be returned', (tokenExpected) => {
    const shouldHaveToken = tokenExpected === 'true'
    cy.get('@loginResponse').then((response) => {
        if (shouldHaveToken) {
            BaseAPIAction.validateResponseHasProperty(response.body, 'token', 'Token validation')
        } else {
            BaseAPIAction.validateResponseNotToHaveProperty(response.body, 'token')
        }
    })
})