var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch('./app/index.html').on('change', browserSync.reload);
    gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles','cssInject'));
    gulp.watch('./app/assets/scripts/**/*.js', gulp.series('modernizr', 'scripts', 'scriptsRefresh'));
});

gulp.task('scriptsRefresh', function (done) {
    browserSync.reload();
    done();
});

gulp.task('cssInject', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream());
});