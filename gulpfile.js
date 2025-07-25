var gulpCli = require('gulp-cli');
var gulp = require('gulp');
var gulpSass = require('gulp-sass')(require('sass'));

//TAREFA PARA COMPILAR SASS
function compilaSass(){
    return gulp.src('./src/*.scss')
        .pipe(gulpSass()) // Usando gulp-sass
        .pipe(gulp.dest('./build'))
}


exports.default = function(){
    gulp.watch('./src/*.scss',compilaSass)
};