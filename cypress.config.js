const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sssc1t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
