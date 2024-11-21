import BasePage from './BasePage'

class DashboardPage extends BasePage {
    constructor() {
        super()
        this.dashboardPageMessage = 'THE BAND'
        this.dashboardPageURL = 'band'
        this.dashboardPageTitle = 'W3.CSS Template'
    } 

    validateDashboardPage() {
        this.findAndAssertElementVisible(this.dashboardPageMessage)
        this.validatePage(this.dashboardPageURL)
        this.assertPageTitle(this.dashboardPageTitle)
    }
}
export default DashboardPage