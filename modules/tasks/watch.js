module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('src/static/js/custom.js', $.gulp.series('scripts'));
    });
};