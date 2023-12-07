module.exports = {
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '@core/(.*)': '<rootDir>/src/app/core/$1'
      },
    preset: 'jest-preset-angular',
    roots: ['<rootDir>'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    collectCoverage: true,
    coverageReporters: ['html', 'text-summary', 'text', 'lcovonly'],
    coverageDirectory: 'coverage/my-app-jest-test',
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
};