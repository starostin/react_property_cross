// Include gulp
var browserify =  require('browserify');
var gulp = require('gulp');
//var browserify =  require('gulp-browserify');
var concat = require('gulp-concat');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create(),
    browserSyncOptions = {
        server: {
            baseDir: 'build'
        },
        port: 9000,
        tunnel: true
    };


//gulp.task('browserify', function(){
//    gulp.src('www/index.js')
//        .pipe(browserify({transform: 'reactify'}))
//        .pipe(concat('index.js'))
//        .pipe(gulp.dest('build'));
//});
gulp.task('browser-sync', function() {
    browserSync.init(browserSyncOptions);
});
gulp.task('browserify', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('www/index.js');
    return b.bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('build'));
});
gulp.task('copy', function(){
    gulp.src('www/index.html')
        .pipe(gulp.dest('build'));
    gulp.src('www/assets/*.*')
        .pipe(gulp.dest('build/assets'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function(){
    gulp.watch('www/**/*.*', ['default'])
});

// Include Our Plugins
//var jshint = require('gulp-jshint');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var imagemin = require('gulp-imagemin');
//var minifycss = require('gulp-minify-css');
//var size      = require('gulp-size');
//var webserver = require('gulp-webserver'),
//    serverConfig = {
//        port: 9000,
//        livereload: true,
//        fallback: 'www/index.html',
//        directoryListing: true,
//        open: true
//    };
//
//gulp.task('lint', function() {
//    return gulp.src('www/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});
//gulp.task('css', function() {
//    return gulp.src('www/assets/css/*.css')
//        .pipe(minifycss({keepSpecialComments: 0}))
//        .pipe(gulp.dest('build/assets/css'))
//        .pipe(size());
//});
//
//gulp.task('js', function() {
//    return gulp.src('www/*.js')
//        .pipe(concat('main.js'))
//        .pipe(gulp.dest('build/js'))
//        .pipe(rename('main.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('build/js'))
//        .pipe(size());
//});
//gulp.task('images', function() {
//    return gulp.src('www/assets/*.{jpg,jpeg,png,gif}')
//        .pipe(imagemin({
//            optimizationLevel: 3,
//            progessive: true,
//            interlaced: true
//        }))
//        .pipe(gulp.dest('build/assets/img'))
//        .pipe(size());
//});
//gulp.task('webserver', function() {
//    gulp.src('www')
//        .pipe(webserver(serverConfig));
//});
//// Watch Files For Changes
//gulp.task('watch', function() {
//    gulp.watch('www/*.{js,css,html}', ['lint']);
//});
//
//// Default Task
//gulp.task('default', ['lint', 'css', 'js', 'images']);