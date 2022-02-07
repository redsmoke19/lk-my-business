import gulp from 'gulp';
import concat from 'gulp-concat';

const vendorsScripts = [
  'node_modules/js-datepicker/dist/datepicker.min.js',
];

export const vendorBuild = (cb) => {
  gulp.src(vendorsScripts)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('build/js/'));

  cb();
};
