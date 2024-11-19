# JaneApp-QA-Assignment
Jane App - QA Assignment
I have implemented a Cypress Automation framework for the QA assignment project.

## Pre-requisites
* Node version: v21.6.1 (User version 14 or higher)

## Install Cypress and Dependencies ⚡
* Run `npm install` to install all the framework dependencies

## Running tests ⚡
* Following custom test scripts are setup in `package.json` to run
* Open Terminal and navigate to project root directory and run the below commands
  * `npm run cypress:open` - will open the cypress test runner so you can run the tests from it
  * `npm run cypress:run:local` - Run all tests inside tests folder

## Framework Setup
- The automation framework is developed using Page Object modal design pattern
- Cypress Folder structure
  * config: Includes environment configuration files
  * docs: This includes documents for assignment questions
  * fixtures: Used to handle test data files
  * pages: Includes UI page classes and API action classes
  * reports: Mochawesome reports is added to the framework. The reports are available here after test execution
  * support: Includes step-definition, utils and cypress helper classes
  * package.json: Contains test scripts and dependencies
  * cypress.config.js: Contains Cypress configuration


## Question 1 - API Test Scenarios
* The API scenario's document is avaible under the `docs` folder which in available inside the cypress folder
* I have also added a sample API test using Cucumber and Gharkin
  * cypress/pages/backend/ - This includes BaseAPIAction and LoginAPIAction classes
  * cypress/support/step_definitions/loginAPI.steps.js - Step Definition for Login API and validations
  * cypress/support/utils/routes - Includes API routes URL
  * cypress/tests/backend/ - This includes API test feature file