
module.exports = {
  collectCoverageFrom : ['<rootDir>/src/**/*.ts'],
    transform:{
      '.+\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",

};
