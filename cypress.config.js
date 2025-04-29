const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sauce',
  env: {
    username: "standard_user",
    password: "secret_sauce",
    wrongpassword: "xhs54_sauce",
    wrongusername: "wrong_user",
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // Add any node event listeners here
    },
  },
  reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: true,
  embeddedScreenshots: true,
  inlineAssets: true
},
screenshotsFolder: 'cypress/screenshots',

});