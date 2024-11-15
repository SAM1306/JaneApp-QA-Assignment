const { defineConfig } = require("cypress")
const fs = require("fs-extra")
const path = require("path")
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const environment = process.env.ENV || 'local'
const config = require(`./cypress/config/${environment}.js`)

module.exports = defineConfig({
  projectId: "testing",
  screenshotsFolder: 'cypress/reports/assets/screenshot',
  videosFolder: 'cypress/reports/assets/videos',
  downloadsFolder: 'cypress/downloads',
  hideXhr: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  retries: {'openMode': 0, 'runMode': 0},
  reporter: 'mochawesome',
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  defaultCommandTimeout: 10000,
  numTestKeptInMemory: 0,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: config.baseURL,
    env: config.env,
    specPattern: 'cypress/tests/**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }))
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    }
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mocha',
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  }
})
