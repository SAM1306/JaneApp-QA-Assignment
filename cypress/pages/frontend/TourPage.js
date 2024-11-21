import BasePage from './BasePage'

class TourPage extends BasePage {
    constructor() {
        super()
        this.tourPageHeading = 'TOUR DATES'
        this.tourPageURL = 'tour'
        this.buyTicketsButton = 'button.w3-button.w3-black.w3-margin-bottom'
        this.buyTicketsWindow = 'Tickets'
        this.ticketsField = '#how_many'
        this.sendToField = '#send_to'
        this.payButton = 'button[type="submit"]'
        this.payButton = 'PAY'
        this.closeButton = '//*[@id="resultModal"]/div/div/button'
        this.closeButtonTicketPurchaseWindow = '//*[@id="ticketModal"]/div/div/button[2]'
        this.ticketResultHeading = 'Ticket Results'
    }

    validateTourPage() {
        this.findAndAssertElementVisible(this.tourPageHeading)
        this.validatePage(this.tourPageURL)
    }

    validateAndFillTicketQuantity(ticketCount) {
        this.assertElementVisible(this.ticketsField)
        this.typeText(this.ticketsField, ticketCount)
    }

    validateAndClearTicketQuantity() {
        this.getElement(this.ticketsField).clear()
    }

    validateAndFillSendTo(contact) {
        this.assertElementVisible(this.sendToField)
        this.typeText(this.sendToField, contact)
    }

    validateAndClearSendTo() {
        this.getElement(this.sendToField).clear()
    }

    clickPayButton() {
        this.findAndAssertElementVisible(this.payButton)
        this.findElementAndClick(this.payButton)
    }

    validateTicketResultPage() {
        this.findAndAssertElementVisible(this.ticketResultHeading)
        this.validatePage(this.tourPageURL)
    }

    clickCloseButton() {
        this.getElementXpath(this.closeButton).click()
    }

    clickCloseButtonOnTicketPurchaseWindow() {
        this.getElementXpath(this.closeButtonTicketPurchaseWindow).click()
    }

    clickBuyTicketsButton(position) {
        this.getElement(this.buyTicketsButton).eq(position).should('be.visible')
        this.getElement(this.buyTicketsButton).eq(position).click()
    }

    validateTicketPurchaseWindow() {
        this.findAndAssertElementVisible(this.buyTicketsWindow)
    }

    buyTourTickets(int, ticketCount, contact) {
        clickBuyTicketsButton(int)
        validateAndFillTicketQuantity(ticketCount)
        validateAndFillSendTo(contact)
        clickPayButton()
    }
}
export default TourPage