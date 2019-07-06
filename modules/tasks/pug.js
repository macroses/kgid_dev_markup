module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.pug({
                pretty: true // чтоб html не в одну строку был
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.browserSync.reload);
    });
};