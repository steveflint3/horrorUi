export default {
  globals: {
    jest: {
      isolateModules: true,
    },
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ['trainingApi/routes.js'], // set of files for which coverage information should be collected
  verbose: true, // display each individual test
  globalSetup: './trainingApi/test/globalSetup.js', // trigger once before all test suites
  globalTeardown: './trainingApi/test/globalTeardown.js', // trigger once after all test suites
  setupFilesAfterEnv: ['./trainingApi/test/setupFile.js'], // set up the testing framework before each test file in the suite is executed.
};
