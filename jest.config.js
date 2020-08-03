module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: ['.spec.js$', '.spec.ts$', '.test.js$', '.test.ts$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/node_modules'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/common',
    '<rootDir>/src/config',
    '<rootDir>/tools'
  ],
  // additionals
  clearMocks: true,
  maxWorkers: 1,
  preset: 'ts-jest'
};
