module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/static/',
    '/database/',
    '/test/',
    'ormconfig.js',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
