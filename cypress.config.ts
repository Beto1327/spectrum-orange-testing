import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

export default defineConfig({
  projectId: "82gho3",
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/features/**/*.feature",
    env:{
      staging:{
        baseURL:"https://opensource-demo.orangehrmlive.com"
      },
      qa: {
        baseURL:"https://opensource-demo.orangehrmlive.com"
      },
      dev:{
        baseURL:"https://opensource-demo.orangehrmlive.com"
      },
      prod:{
        baseURL:"https://opensource-demo.orangehrmlive.com"
      }
    }
  },
});
