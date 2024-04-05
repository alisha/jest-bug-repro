// jest-puppeteer.config.cjs

// I left one (working) config uncommented. You can uncomment the other versions
// labeled as broken to reproduce the issue.

// /**
//  * Broken version 1
//  */
// /** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
// module.exports = {
//     launch: {
//       headless: false,
//       userDataDir: "./user_data_dir",
//     },
// };

// /**
//  * Broken version 2
//  * This is what I would expect to do, since this is how you specify other args
//  * for puppeteer
//  */
// /** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
// module.exports = {
//     launch: {
//       headless: false,
//         args: [
//             '--user-data-dir=./user_data_dir',
//         ]
//     },
// };

// /**
//  * Working version
//  */
// /** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
// module.exports = {
//     launch: {
//       headless: false,
//     },
//     args: [
//         '--user-data-dir=./user_data_dir',
//     ]
// };

/**
 * Working version with other puppeteer flags
 */
/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
    launch: {
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-setuid-sandbox',
      ]
    },
    args: [
        '--user-data-dir=./user_data_dir',
    ]
};