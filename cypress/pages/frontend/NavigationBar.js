import BasePage from './BasePage'

class NavigationBar extends BasePage {
    constructor() {
        super()
        this.homeLink = 'a[href="#"]'
        this.tourLink = 'a[href="#tour"]'
        this.contactLink = 'a[href="#contact"]'
        this.moreButton = 'MORE'
        this.contactURL = '/band#contact'
        this.tourURL = '/band#tour'
        this.homeURL = '/band#'
    }

    clickHomeOnNavigationBar() {
        this.assertElementVisible(this.homeLink)
        this.clickElement(this.homeLink)
    }

    clickTourOnNavigationBar() {
        this.assertElementVisible(this.tourLink)
        this.clickElement(this.tourLink)
    }

    clickMoreOnNavigationBar() {
        this.findAndAssertElementVisible(this.moreButton)
        this.findElement(this.moreButton).click()
    }

    clickContactOnNavigationBar() {
        this.assertElementVisible(this.contactLink)
        this.clickElement(this.contactLink)
    }

    navigateToContactPage() {
        this.visitPage(this.contactURL)
    }

    navigateToTourPage() {
        this.visitPage(this.tourURL)
    }

    navigateToHomePage() {
        this.visitPage(this.homeURL)
    }
}
export default NavigationBar