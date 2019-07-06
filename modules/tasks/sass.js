module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/sass/**/*.scss')
            .pipe($.sourcemaps.init())
            // .pipe($.csso())
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.sourcemaps.write('../src/sourcemaps'))
            .pipe($.gulp.dest('dist/css'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};