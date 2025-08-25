import { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

const { transform } = createDefaultPreset();

const config: Config = {
    testEnvironment: 'jsdom',
    transform: {
        ...transform,
    },
};

export default config;
