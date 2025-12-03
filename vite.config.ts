import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        minify: false,
        outDir: resolve(__dirname, 'dist'),
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: [
                "@testing-library/dom",
                "@testing-library/user-event",
                "jsdom",
            ]
        }
    },
    plugins: [
        dts({
            outDir: resolve(__dirname, 'dist'),
            entryRoot: resolve(__dirname, 'src'),
            exclude: ["**/*.test.ts"],
            staticImport: true,
            insertTypesEntry: true,
            rollupTypes: true,
        }),
    ]
})