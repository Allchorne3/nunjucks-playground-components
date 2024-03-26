let mix = require('laravel-mix')
const path = require('path');

mix
    // Directories
    .copyDirectory('./site/_redirects', 'public/')

    // JavaScript
    .js('./site/src/scripts/site.js', 'public/scripts').setPublicPath('public')

    // CSS
    .sass('./site/src/style/style.scss', 'public/style/style.css')

    .webpackConfig({
        resolve: {
            alias: {
                'Scripts': path.resolve(__dirname, 'src/scripts'),
                'Utils': path.resolve(__dirname, 'src/scripts/utils'),
                // Add more aliases as needed
            }
        }
    });
