import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-sass';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processFonts() {
     return gulp.src(project.fontProcessor.source)
	  .pipe(gulp.dest(project.fontProcessor.output))
	 // .pipe(build.bundle());
};
