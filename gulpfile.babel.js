'use strict';

import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';

gulp.task('build', [], () =>
    gulp.src(['src/**/*.*'])
    .pipe(babel())
    .pipe(gulp.dest('dist/'))
);

gulp.task('watch', ['build'], () => {
    gulp.watch(['src/**/*.*'], ['build']);
    gulp.start('run');
});

gulp.task('run', ['build'], () => {
    nodemon({
        delay: 10,
        script: 'dist/main.js',
        // args: ["config.json"],
        ext: 'js',
        watch: 'src'
    })
});

gulp.task('default', ['build', 'run']);
