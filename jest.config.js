module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript'
    }
  },
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules', '/dist', '^(.*)\\.test\\.(.*)$', '/src/main.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
