module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/test/__mocks__/svgMock.js',
      },
}