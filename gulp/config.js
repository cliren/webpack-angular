var path = require('path');
var dest = './dist',
  src = './src',
  specs = './specs',
  demo = './demo',
  bower_components = './bower_components',
  node_modules = './node_modules',
  karmaPath = path.join(__dirname, '../karma.conf.js'),
  serve = [
    dest
  ];

module.exports = {
  browserSync: {
    server: {
      baseDir: serve
    },
    files: [
      dest + '/**'
    ],
    open: false,
    reloadOnRestart: true
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  images: {
    src: src + "/**/*.png"
  },
  specs: specs + '/**/*.spec.js',
  karma: karmaPath,
  templates: src + "/**/*.handlebars",
  js: src + "/**/*.js",
  less: src + "/**/*.less",
  src: src,
  dest: dest
};
