import ConactPage from '../../../pages/frontend/ContactPage'

const contactPage = new ConactPage()

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When('the Contact Page is displayed', () => {
    contactPage.validateContactPage()
})

When('the user enters {string}, {string} and {string} in the contact form', (name, email, message) => {
    if (name.trim() === '') {
        contactPage.validateAndClearName()
    } else {
        contactPage.validateAndFillName(name)
    }

    if (email.trim() === '') {
        contactPage.validateAndClearEmail()
    } else {
        contactPage.validateAndFillEmail(email)
    }

    if (message.trim() === '') {
        contactPage.validateAndClearMessage()
    } else {
        contactPage.validateAndFillMessage(message)
    }
})

When('the user clicks the send button', () => {
    contactPage.clickSendButton()
})

Then('the contact form is submitted and the alert window is visible', () => {
    contactPage.validateAlertWindow()
})

