let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('assets/js/app.js', 'dist/')
    .sass('assets/scss/app.scss', 'dist/')
    .version()
    .sourceMaps(true, 'source-map')
    .setPublicPath('dist/')
    .setResourceRoot('/app/themes/theme-name/dist/')
    .extract();