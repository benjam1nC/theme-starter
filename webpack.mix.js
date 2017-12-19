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
    .sass('assets/sass/app.scss', 'dist/')
    .sourceMaps()
    .setPublicPath('dist/')
    // Edit theme name here
    .setResourceRoot('/app/themes/theme-name/')
    .extract([
        'jquery'
    ])
    // Edit URL
    .browserSync('user.projet.zout.interne');