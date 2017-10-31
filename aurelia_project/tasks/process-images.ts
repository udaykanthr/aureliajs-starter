import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-sass';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processImages() {
	 return gulp.src(project.imagesProcessor.source)
	  .pipe(gulp.dest(project.imagesProcessor.output))
	  //.pipe(build.bundle());
};
