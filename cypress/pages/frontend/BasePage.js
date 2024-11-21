class BasePage {
    // Utility method to visit a page
    visitPage(url) {
        return cy.visit(url, { failOnStatusCode: false })
    }

    validatePage(url) {
        return cy.url().should('include', url)
    }
  
    // Utility method to interact with elements
    getElement(selector) {
        return cy.get(selector)
    }

    // Utility method to interact with elements using xpath
    findElement(selector) {
        return cy.contains(selector)
    }
  
    // Utility method to perform common UI actions (e.g., clicking, typing)
    clickElement(selector) {
        return this.getElement(selector).click()
    }

    typeText(selector, text) {
        return this.getElement(selector).clear().type(text)
    }
  
    // Utility method to handle assertions on UI elements
    assertElementVisible(selector) {
        return this.getElement(selector).should('be.visible')
    }

    findAndAssertElementVisible(selector) {
        return this.findElement(selector).should('be.visible')
    }

    assertElementDisabled(selector) {
        return this.getElement(selector).should('be.disabled')
    }

    assertPageTitle(expectedTitle) {
        return cy.title().should('include', expectedTitle)
    }

    clearText(selector) {
        return this.getElement(selector).clear()
    }
  
    // Utility method for logging
    log(message) {
        return cy.log(message)
    }

    step(message) {
        return cy.step(message)
    }

    waitFor(duration) {
        return cy.wait(duration)
    }

    navigateBack() {
        return cy.go('back')
    }

    validateHeading(heading) {
        return cy.get(heading).should('contain', heading)
    }

    validateErrorMessage(errorMessage) {
      return cy.contains(errorMessage).should('be.visible')
    }
}
export default BasePage