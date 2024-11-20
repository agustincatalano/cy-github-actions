const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true,
  projectId: 'xank8h',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
