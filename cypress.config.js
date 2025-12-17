const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.feature',
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }))
      return config
    },
  },
})
