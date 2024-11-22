# JaneApp-QA-Assignment
Jane App - QA Assignment
I have added the related documents which includes test plan are placed at - /cypress/docs/
I have implemented a Cypress Automation framework for the QA assignment project.

## Pre-requisites
* Install node and npm on your local

## Project setup
* Clone the repository on your local machine
* Navigate to the project root directory

## Install Cypress and Dependencies ⚡
* Run `npm install` to install cypress and all the framework dependencies

## Running tests ⚡
* Start the web application on the local machine
* Following custom test scripts are setup in `package.json` to run
* Open Terminal and navigate to project root directory and run the below commands
  * `npm run cypress:open` - will open the cypress test runner so you can select and run the test
    - The cypress runner window will open
    - Select E2E tests. The automation tests will appear
    - Select the test to be executed
  * `npm run cypress:run:local` - Run all tests inside tests folder in chrome browser
  * `cypress:run:local-headless` - Run all tests inside tests folder in headless chrome browser
    - After the test executed is completed. The mochawesome report are available inside the report folder
    - Check the latest html report - Copy report path and paste in browser

## Framework Structure ⚡
- The automation framework is developed using Page Object modal design pattern
- Cypress Folder structure
  * config: Includes environment configuration files
  * docs: This includes documents for assignment questions. it has 2 sub-folders documents and testplan
  * fixtures: Used to handle test data files
  * pages: Includes UI page classes and API action classes
  * reports: Mochawesome reports is added to the framework. The reports are available here after test execution
  * support: Includes step-definition, utils and cypress helper classes
  * package.json: Contains test scripts and dependencies
  * cypress.config.js: Contains Cypress configuration


## Question 1 - API Test Scenarios ⚡
* The API scenario's requirements document is avaible under the `documents` folder inside `docs` folder which in available inside the cypress folder
* The API scenario's test plan document is avaible under the `testplan` folder inside `docs` folder which in available inside the cypress folder
* I have also added a sample API test (I have added @skip tag to avoid the test being triggered. The test is just an example)
  * cypress/pages/backend/ - This includes BaseAPIAction and LoginAPIAction classes
  * cypress/support/step_definitions/loginAPI.steps.js - Step Definition for Login API and validations
  * cypress/support/utils/routes - Includes API routes URL
  * cypress/tests/backend/ - This includes API test feature file

## Question 2 - Merging Strategy ⚡
* The Merging Strategy overview document is avaible under the `documents` folder inside `docs` folder which in available inside the cypress folder
* The Merging Strategy test plan document is avaible under the `testplan` folder inside `docs` folder which in available inside the cypress folder

## Question 3 - Frontend Test Cases and test plan document ⚡
* The Frontend Test Cases document is avaible under the `documents` folder inside `docs` folder which in available inside the cypress folder
* The Frontend test plan document is avaible under the `testplan` folder inside `docs` folder which in available inside the cypress folder
* I have also added a UI functional tests using Cypress, Cucumber, Gherkin and page object modal
  * cypress/pages/frontend/ - This includes BasePage and other page classes
  * cypress/support/step_definitions/frontend/ - Step Definition for UI Pages and validations
  * cypress/tests/frontend/ - This includes UI test feature file