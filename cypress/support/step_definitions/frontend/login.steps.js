import LoginPage from '../../../pages/frontend/LoginPage'
import DashboardPage from '../../../pages/frontend/DashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

const { Given, When, Then, And } = require('@badeball/cypress-cucumber-preprocessor')

Given('the login page is displayed', () => {
    loginPage.visitLoginPage('/')
})

When('the user enters {string} and {string}', (username, password) => {
    if (username.trim() === '') {
        loginPage.validateAndClearUsername()
    } else {
        loginPage.validateAndFillUsername(username)
    }

    if (password.trim() === '') {
        loginPage.validateAndClearpassword()
    } else {
        loginPage.validateAndFillPassword(password)
    }
})

When('the user clicks the login button', () => {
    loginPage.submit()
})

Then('the user should see {string} page', (expectedMessage) => {
    if (expectedMessage === 'THE BAND') {
        dashboardPage.validateDashboardPage()
    } else {
        loginPage.validateFailedLoginPage(expectedMessage)
    }
})

Then('the user should see missing field tooltip for {string} and {string}', (username, password) => {
    if (username.trim() === '') {
        loginPage.missingFieldUsernameTooltip()
    }

    if (password.trim() === '') {
        loginPage.missingFieldpasswordTooltip()
    }
})

When('the user clicks the back button', () => {
    loginPage.clickBackButton()
})

Then('the user is navigated back to Login Page', () => {
    loginPage.validateLoginPage()
})

Given('the user is logged in', () => {
    loginPage.login()
    dashboardPage.validateDashboardPage()
})

Then('the user is navigated to Dashboard page', () => {
    dashboardPage.validateDashboardPage()
})