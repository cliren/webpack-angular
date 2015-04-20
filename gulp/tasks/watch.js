var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch([config.js, config.less, config.templates], ['webpack']);
  gulp.watch(config.markup.src, ['markup']);
});
