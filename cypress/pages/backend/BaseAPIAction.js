class BaseAPIAction {
    // Utility method to send HTTP requests
    static sendRequest(method, url, headers, body = {}) {
        return cy.api({
        method,
        url,
        headers,
        body,
        failOnStatusCode: false // Prevent Cypress from failing on non-200 responses
        })
    }

    static validateAPIResponseStatusCode(response, expectedStatusCode) {
        try {
            expect(response.status).to.eq(expectedStatusCode)
        } catch (error) {
            throw new Error(`Expected status code ${expectedStatusCode}, but received ${response.status} instead. Response body: ${response.body}`)
        }
    }

    static validateResponseToHaveProperty(response, property, message) {
        try {
            expect(response).to.have.property(property)
            cy.log(`${message} - Field validation success. ${message} has ${property}`)
        } catch (error) {
            throw new Error(`${message} - Field validation failed: Expected ${message}, to have ${property} but received ${response}`)
        }
    }

    static validateResponseNotToHaveProperty(response, property) {
        expect(response).not.to.have.property(property)
    }
}
export default BaseAPIAction
