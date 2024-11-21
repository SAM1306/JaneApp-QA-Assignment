import BasePage from './BasePage'
import * as DATA from '../../support/utils/data'

class LoginPage extends BasePage {
    constructor() {
        super()
        this.username = '#username'
        this.password = '#password'
        this.loginButton = 'input[type="submit"]'
        this.loginPageURL = 'localhost:3000'
        this.pageTitle = 'Basic_Test_Serve_Log_In'
        this.notFoundPageURL = 'not_found'
        this.notFoundPageTitle = '404_Not_Found_Page'
        this.backButton = 'Back'
        this.missingFieldText = 'Please fill out this field.'
    }

    visitLoginPage() {
        this.visitPage('/')
        this.validatePage(this.loginPageURL)
        this.assertPageTitle(this.pageTitle)
    }

    validateLoginPage() {
        this.validatePage(this.loginPageURL)
        this.assertPageTitle(this.pageTitle)
    }

    validateAndFillUsername(username) {
        this.assertElementVisible(this.username)
        this.typeText(this.username, username)
    }

    validateAndClearUsername() {
        this.getElement(this.username).clear()
    }

    validateAndClearpassword() {
        this.getElement(this.password).clear()
    }

    validateAndFillPassword(password) {
        this.assertElementVisible(this.password)
        this.typeText(this.password, password)
    }

    submit() {
        this.assertElementVisible(this.loginButton)
        this.clickElement(this.loginButton)
    }

    validateFailedLoginPage(message) {
        this.findAndAssertElementVisible(message)
        this.validatePage(this.notFoundPageURL)
        this.assertPageTitle(this.notFoundPageTitle)
    }

    clickBackButton() {
        this.findAndAssertElementVisible(this.backButton)
        this.findElementAndClick(this.backButton)
    }

    validateMissingFieldInfoPopup() {
        this.findAndAssertElementVisible(this.missingFieldText)
    }

    login() {
        this.visitLoginPage()
        this.validateAndFillUsername(DATA.validUsername)
        this.validateAndFillPassword(DATA.validPassword)
        this.submit()
    }

    missingFieldUsernameTooltip() {
        this.getElement(this.username)
        .then(($input) => {
            this.assertText($input[0].validationMessage, 'Please fill out this field.')
        })
    }

    missingFieldpasswordTooltip() {
        this.getElement(this.password)
        .then(($input) => {
            this.assertText($input[0].validationMessage, 'Please fill out this field.')
        })
    }
}
export default LoginPage
