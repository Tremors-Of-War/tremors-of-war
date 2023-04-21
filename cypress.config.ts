import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: false,

  e2e: { supportFile: false, baseUrl: "http://localhost:5173" }
});
