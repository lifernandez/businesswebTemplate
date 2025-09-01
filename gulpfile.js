const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const paths = {
  html: { src: "src/*.html", watch: "src/**/*.html", dest: "dist/" },
  css: { src: "src/assets/css/**/*.css", dest: "dist/css/" },
  js: { src: "src/assets/js/**/*.js", dest: "dist/js/" },
  images: { src: "src/assets/images/**/*", dest: "dist/images/" },
};

function html() {
  return gulp.src(paths.html.src)
    .pipe(fileInclude({ prefix: "@@", basepath: "@file" }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

function css() {
  return gulp.src(paths.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browserSync.stream());
}

function js() {
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({ server: { baseDir: "dist" } });
  gulp.watch(paths.html.watch, html);
  gulp.watch(paths.css.src, css);
  gulp.watch(paths.js.src, js);
  gulp.watch(paths.images.src, images);
}

exports.default = gulp.series(gulp.parallel(html, css, js, images), serve);
