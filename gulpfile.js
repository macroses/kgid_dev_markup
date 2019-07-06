(function () {
    'use strict';

    global.$ = {
        gulp        : require('gulp'),
        pug         : require('gulp-pug'),
        sass        : require('gulp-sass'),
        sourcemaps  : require('gulp-sourcemaps'),
        autoprefixer: require('gulp-autoprefixer'),
        concat      : require('gulp-concat'),
        browserSync : require('browser-sync').create(),

        path: {
            tasks: require('./modules/config/tasks.js')
        }
    };

    $.path.tasks.forEach(function (taskPath) {
        require(taskPath)();
    });

    $.gulp.task('default', $.gulp.series(
        $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts'),
        $.gulp.parallel('watch', 'serve')
    ));

    $.gulp.task('build', $.gulp.series(
        $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts'),
        $.gulp.parallel('watch', 'serve')
    ));

}());