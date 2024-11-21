import BasePage from './BasePage'

class LoginPage extends BasePage {
    constructor() {
        super()
        this.username = '#username'
        this.password = '#password'
        this.loginButton = 'input[type="submit"]'
        this.dashboardPageMessage = 'THE BAND'
    }

    visitLoginPage() {
        this.visitPage('/')
        this.validatePage('localhost:3000')
        this.assertPageTitle('Basic_Test_Serve_Log_In')
    }

    validateAndFillUsername(username) {
        this.assertElementVisible(this.username)
        this.typeText(this.username, username)
    }

    validateAndFillPassword(password) {
        this.assertElementVisible(this.password)
        this.typeText(this.password, password)
    }

    submit() {
        this.assertElementVisible(this.loginButton)
        this.clickElement(this.loginButton)
    }

    validateDashboardPage() {
        this.findAndAssertElementVisible(this.dashboardPageMessage)
        this.validatePage('band')
        this.assertPageTitle('W3.CSS Template')
    }

    validateFailedLoginPage(message) {
        this.findAndAssertElementVisible(message)
        this.validatePage('not_found')
        this.assertPageTitle('404_Not_Found_Page')
    }

}
export default LoginPage
