import LoginPage from '../../pages/frontend/LoginPage'

const loginPage = new LoginPage()

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('the login page is displayed', () => {
    loginPage.visitLoginPage('/')
})

When('I enter {string} and {string}', (username, password) => {
    loginPage.validateAndFillUsername(username)
    loginPage.validateAndFillPassword(password)
  })

When('I click the login button', () => {
    loginPage.submit()
})

Then('I should see {string} page', (expectedMessage) => {
    if (expectedMessage === 'THE BAND') {
      loginPage.validateDashboardPage()
    } else {
      loginPage.validateFailedLoginPage(expectedMessage)
    }
  })