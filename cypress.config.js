const { defineConfig } = require("cypress")
const fs = require("fs-extra")
const path = require("path")

module.exports = defineConfig({
  projectId: "testing",
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos',
  downloadsFolder: 'cypress/downloads',
  hideXhr: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  retries: {'openMode': 0, 'runMode': 1},
  reporter: 'cypress-multi-reporters',
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  defaultCommandTimeout: 10000,
  numTestKeptInMemory: 0,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config);
      return config
    },
    specPattern: 'cypress/tests/**/*.feature',
    baseUrl: 'http://localhost:3000',
  },
  reporterOptions: {
    reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
          useInlineDiffs: true,
          embeddedScreenshots: true,
          reportDir: 'cypress/reports/mocha',
          quite: true,
          overwrite: false,
          html: false,
          json: true,
          charts: true,
      }
  }
})
