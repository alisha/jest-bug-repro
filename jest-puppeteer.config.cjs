// jest-puppeteer.config.cjs

/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
    launch: {
      headless: false,
      userDataDir: "./user_data_dir",
    },
};