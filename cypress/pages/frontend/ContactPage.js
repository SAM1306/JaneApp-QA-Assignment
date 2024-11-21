import BasePage from './BasePage'

class ConactPage extends BasePage {
    constructor() {
        super()
        this.contactPageHeading = 'CONTACT'
        this.nameField = '#Name'
        this.emailField = '#Email'
        this.messageField = '#Message'
        this.sendButton = 'button[type="submit"]'
        this.contactPageURL = 'contact'
        this.windowAlert = 'says'
    }

    validateContactPage() {
        this.validatePage(this.contactPageURL)
    }

    validateAndFillName(name) {
        this.assertElementVisible(this.nameField)
        this.typeText(this.nameField, name)
    }

    validateAndClearName() {
        this.getElement(this.nameField).clear()
    }

    validateAndFillEmail(email) {
        this.assertElementVisible(this.emailField)
        this.typeText(this.emailField, email)
    }

    validateAndClearEmail() {
        this.getElement(this.emailField).clear()
    }

    validateAndFillMessage(message) {
        this.assertElementVisible(this.messageField)
        this.typeText(this.messageField, message)
    }

    validateAndClearMessage() {
        this.getElement(this.messageField).clear()
    }

    clickSendButton() {
        this.assertElementVisible(this.sendButton)
    }

    submitContactForm(name, email, message) {
        this.validateAndFillName(name)
        this.validateAndFillEmail(email)
        this.validateAndFillMessage(message)
        this.clickSendButton()
    }

    validateAlertWindow() {
        cy.on('window:alert', (alertText) => {
            // Validate the alert message
            this.assertTextInclude(alertText, this.windowAlert)    
        })
    }
}
export default ConactPage