const mix = require('laravel-mix');

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

mix.js([
    'resources/js/iconos.js',
    'resources/js/datatables.js',
    'resources/js/app.js',
    'resources/js/main.js'
], 'public/js/app.js')
    .styles(['resources/css/bootstrap.css', 'resources/css/datatables.css', 'resources/css/iconos.css'], 'public/css/app.css');

