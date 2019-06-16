var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
// var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require("gulp-autoprefixer");
// let rename = require("gulp-rename");
let uglify = require("gulp-uglify-es").default;

gulp.task("reload", function () {
  browserSync.reload();
});

gulp.task("serve", function () {
  browserSync({
    server: "./"
  });

  gulp.watch("./*.html", ["reload"]);
  gulp.watch("./src/js/*.js", ["reload", 'uglify']);
});

gulp.task("sass", function () {
  return (
    gulp
      .src("src/scss/main.scss")
      // .pipe(sourcemaps.init())
      .pipe(
        sass({
          errLogToConsole: true,
          outputStyle: "compressed" //nested, expanded, compact, compressed.
        })
      )
      // .pipe(sourcemaps.write())
      .pipe(
        autoprefixer({
          browsers: ["last 10 versions"]
        })
      )
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.stream())
  );
});

gulp.task("watch", ["sass", "serve", 'uglify'], function () {
  gulp.watch("src/scss/**/*.scss", ["sass", 'uglify']);
});

// minifikacja javascript ===> gulp js

gulp.task("uglify", function () {
  return (
    gulp
      .src("./src/js/**/*.js")
      // .pipe(rename("bundle.min.js"))
      .pipe(uglify(/* options */))
      .pipe(gulp.dest("dist/js/"))
  );
});

// 1. npm init -y
// 2. npm i -D gulp gulp-sass browser-sync gulp-sourcemaps gulp-autoprefixer gulp-uglify-es

// 3. gulp watch
// 4. gulp uglify

// (npm install --save-dev) ===> npm i -D

// gulp.task('NAZWA ZADANIA', [opcjonalnie, LISTA ZADAŃ DO WYKONANIA] , function(){
// ciało funkcji })

// https://github.com/marcinkrzeminski/gulp-starter-kit
