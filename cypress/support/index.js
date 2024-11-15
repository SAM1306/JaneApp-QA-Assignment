import '@badeball/cypress-cucumber-preprocessor/steps'
import './commands'
import 'cypress-plugin-api'
import 'cypress-plugin-steps'

const path = require('path')
const fs = require('fs')

const createCustomErrorMessage = (error, steps, runnableObj) => {
    let lastSteps = "Last logged steps:\n"
    steps.map((step, index) => {
        lastSteps += `${index + 1}. ${step}\n`
    })

    const messageArr = [
        `Context: ${runnableObj.parent.title}`,
        `Test: ${runnableObj.title}`,
        `---------`,
        `${error.message}`,
        `\n${lastSteps}`
    ]
    return messageArr.join('\n')
}

Cypress.on('fail', (err, runnable) => {
    const customErrorMessage = createCustomErrorMessage(
        err,
        Cypress.env('step') || ['no steps provided...'],
        runnable
    )
    const customError = err
    customError.message = customErrorMessage
    throw customError
})

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err)
    return false
})

//Hide fetch/XHR requests
const app = window.top
if(!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style')
    style.innerHTML = '.command-name-request, .command-name-xhr { display: none }'
    style.setAttribute('data-hide-command-log', '')

    app.document.head.appendChild(style)
}