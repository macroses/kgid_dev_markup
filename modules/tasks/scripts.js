module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'src/static/js/popper.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'src/static/js/datepicker.min.js'
        ])
            .pipe($.concat('libs.min.js'))
            .pipe($.gulp.dest('dist/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src([
            'src/static/js/custom.js'
        ])
            .pipe($.gulp.dest('dist/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};