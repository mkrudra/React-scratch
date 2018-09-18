const gulp = require('gulp');
const runSequence = require('run-sequence');
const imagemin = require('gulp-imagemin');
const imageminOptipng = require('imagemin-optipng');
const imageminMozjpeg = require('imagemin-mozjpeg');
const webp = require('gulp-webp');

gulp.task('Mozjpeg', function () {
  return gulp.src('./src/assets/src-images/*.jpg')
    .pipe(imagemin([imageminMozjpeg({
        quality: 90
    })]))
    .pipe(gulp.dest('./src/assets/images'));
});

gulp.task('lossLessWebp', function () {
  return gulp.src('./src/assets/src-images/*.png')
    .pipe(webp({
      lossless:true
    }))
    .pipe(gulp.dest('./src/assets/images/webp'));
});
gulp.task('lossyWebp', function () {
  return gulp.src('./src/assets/src-images/*.jpg')
    .pipe(webp({
        quality: 90
    }))
    .pipe(gulp.dest('./src/assets/images/webp'));
});

gulp.task('optimpng',function () {
  return  gulp.src(['./src/assets/src-images/*.png'])    
    .pipe(imagemin([imageminOptipng({optimizationLevel: 3})	
    ]))
    .pipe(gulp.dest('./src/assets/images'));
});

gulp.task('oi', function (cb) {
  runSequence(['Mozjpeg','lossLessWebp','lossyWebp','optimpng'], cb);
});


gulp.task('default',['oi']);