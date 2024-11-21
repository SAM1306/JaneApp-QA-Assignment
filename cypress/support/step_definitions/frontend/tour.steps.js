import TourPage from '../../../pages/frontend/TourPage'

const tourPage = new TourPage()

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When('the Tour Page is displayed', () => {
    tourPage.validateTourPage()
})

When('the user clicks the Buy Tickets button {int}', (position) => {
    tourPage.clickBuyTicketsButton(position)
})

Then('the user should see the Ticket Purchase Window', () => {
    tourPage.validateTicketPurchaseWindow()
})

When('the user enters {string} and {string} in buy tickets form', (quantity, contact) => {
    if (quantity.trim() === '') {
        tourPage.validateAndClearTicketQuantity()
    } else {
        tourPage.validateAndFillTicketQuantity(quantity)
    }

    if (contact.trim() === '') {
        tourPage.validateAndClearSendTo()
    } else {
        tourPage.validateAndFillSendTo(contact)
    }
})

When('the user clicks the Pay button', () => {
    tourPage.clickPayButton()
})

Then('the user should see the Ticket Results page', () => {
    tourPage.validateTicketResultPage()
})

Then('the user clicks the Close button', () => {
    tourPage.clickCloseButton()
})

When('the user clicks the Close button on Ticket Purchase window', () => {
    tourPage.clickCloseButtonOnTicketPurchaseWindow()
})

Then('the user should see the tour page', () => {
    tourPage.validateTourPage()
})