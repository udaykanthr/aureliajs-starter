import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-sass';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {
     return gulp.src(project.cssProcessor.source)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write('./map'))
      .pipe(gulp.dest(project.cssProcessor.output))
      // .pipe(build.bundle());
};
