var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');


var paths = {
	jsSource: ['./public/app/app.js', './public/**/*.js', '!./public/bundle.js'],
	sassSource: ['./public/**/*.css', '!./public/bundle.css']
};

gulp.task('js', function(){
	return gulp.src(paths.jsSource)
	//.pipe(babel())
	.pipe(concat('bundle.js'))
	// .pipe(annotate())
	//.pipe(uglify())
	.pipe(gulp.dest('./public'));
})

gulp.task('sass', function(){
	return gulp.src(paths.sassSource)
	// .pipe(sass())
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest('./public'));
})

gulp.task('watch', function(){
	gulp.watch(paths.jsSource, ['js']);
	gulp.watch(paths.sassSource, ['sass']);
})

gulp.task('default', ['watch', 'js', 'sass']);



