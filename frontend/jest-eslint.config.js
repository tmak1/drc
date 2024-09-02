module.exports = {
  // your jest-runner-eslint options
  runner: 'jest-runner-eslint',
  displayName: 'lint',
  testMatch: [
    // add whatever files you want to lint
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.jsx'
  ]
};
