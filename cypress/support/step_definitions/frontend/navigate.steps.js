import NavigationBar from '../../../pages/frontend/NavigationBar'

const navigationBar = new NavigationBar()

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When('the user navigates to Contact Page', () => {
    navigationBar.navigateToContactPage()
})

When('the user navigates to Tour Page', () => {
    navigationBar.navigateToTourPage()
})

When('the user navigates to Home Page', () => {
    navigationBar.navigateToHomePage()
})