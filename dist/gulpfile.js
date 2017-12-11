// Plugins
var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cache = require('gulp-cache')
	cleancss = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	sass = require('gulp-ruby-sass')

// Compile all the styles
gulp.task('styles', function() {
	return sass('scss/crutch.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 3 versions'))
		.pipe(gulp.dest('css/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cleancss())
		.pipe(gulp.dest('css/'))
		.pipe(notify({ message: 'Styles task complete' }));
});

// Watch for updates; compile on save
gulp.task('watch', function() {
	// Watch SCSS files
	gulp.watch('scss/**/*.scss', ['styles']);
});
