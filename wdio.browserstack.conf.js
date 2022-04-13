exports.config = {
    user: 'pranithsuvarna_DoXsL9',
    key: 'vqYHjLbynRvSGG7vBF1F',  // Your BrowserStack credentials go here
  
    specs: [
        './test/specs/**/*.js'  // The test specs to run
    ],
    exclude: [],
  
    capabilities: [{
      browserName: 'Chrome',  // Signifies on what platform your test will run. You can define other capabilities here.
      name: 'E2E_test',
      build: 'webdriverio-browserstack-build',  // The name of test and name of build is being defined here
      "browserstack.debug": true,
      "browserstack.networkLogs": true
    }],
  
    logLevel: 'warn',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'https://www.rahulshettyacademy.com',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    host: 'hub.browserstack.com',  // This line is important for your tests to run on BrowserStack
  
    // before: function () {
    //   var chai = require('chai');
    //   global.expect = chai.expect;
    //   chai.Should();
    // },
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
  
    //// The afterTest function is used to mark the test status on BrowserStack using JavaScript executor based on the assertion status of your tests
    // afterTest: function (test, context, { error, result, duration, passed, retries }) {
    //   if(passed) {
    //     browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": ""}}');
    //   } else {
    //     browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": ""}}');
    //   }
    // }
  }
  