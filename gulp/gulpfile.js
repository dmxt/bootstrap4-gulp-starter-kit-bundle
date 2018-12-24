var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create(),
    plumber = require("gulp-plumber"),
    notify = require("gulp-notify"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename");

var paths = {
    styles: {
        scss: "../assets/scss/**/*.scss",
        css: "../assets/css"
    },
    html: "../*.html"
};

function scss() {
    return gulp
        .src(paths.styles.scss)

        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass({
            outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer(),cssnano({
            discardComments: {removeAll: true}})]))

        .pipe(concat("main.css"))
        .pipe(rename({ suffix: ".min" }))

        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.css))

        .pipe(browserSync.stream());
}

function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init({
        server: "..",
        notify: false
    });
    gulp.watch(paths.styles.scss, scss)
    gulp.watch(global + "/html.css")
}

gulp.task('default', gulp.parallel(scss, watch));

exports.watch = watch;
