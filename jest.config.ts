// jest.config.ts
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Soporte para imports como @components/*
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};

export default createJestConfig(customJestConfig);
