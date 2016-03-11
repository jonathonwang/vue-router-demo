var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
// var scssLint = require('laravel-elixir-scss-lint');

// Set Bower Package Path
var bowerPath = './bower_components';

// Get Bower Packages
var paths = {
   'jquery': bowerPath + '/jquery/dist/jquery.js',
   'vue': bowerPath +'/vue/dist/vue.js',
   'vueresource': bowerPath +'/vue-resource/dist/vue-resource.js',
   'vuerouter': bowerPath +'/vue-router/dist/vue-router.js',
   'bootstrap': bowerPath +'/bootstrap-sass/assets/',
   'normalize': bowerPath + '/normalize-css/normalize.css',
   'fontawesome': bowerPath + '/font-awesome/'
};

elixir(function(mix) {
    mix.copy(paths.jquery, 'src/js/vendor/jquery.js');
    mix.copy(paths.vue, 'src/js/vendor/vue.js');
    mix.copy(paths.vueresource, 'src/js/vendor/vue-resource.js');
    mix.copy(paths.vuerouter, 'src/js/vendor/vue-router.js');
    mix.copy(paths.bootstrap + 'javascripts/bootstrap.js', 'src/js/vendor/bootstrap.js');
    mix.copy(paths.bootstrap + 'stylesheets', 'src/sass/vendor/bootstrap');
    mix.copy(paths.normalize, 'src/sass/vendor/normalize/_normalize.scss');
    mix.copy(paths.fontawesome + 'scss', 'src/sass/vendor/font-awesome');

    // Add Fonts
    mix.copy(paths.bootstrap + 'fonts/bootstrap', 'dist/fonts/bootstrap');
    mix.copy(paths.fontawesome + 'fonts', 'dist/fonts');

    // Scripts Task
    mix.scripts([
      'vue.js',
      'vue-resource.js',
      'vue-router.js',
      'jquery.js',
      'bootstrap.js'
    ], 'dist/js/vendor.js', 'src/js/vendor/' );

    mix.browserify([
      'main.js'
    ], 'dist/js/scripts.js', 'src/js/');

    // Sass Task
    mix.sass('app.scss', 'dist/css', 'src/scss');

    // Scss Syntax Linter
    // mix.scssLint();
});
