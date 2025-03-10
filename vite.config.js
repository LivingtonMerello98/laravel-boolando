import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

//modo 2
//const path = require('path');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '~resources': '/resources/',
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
});
