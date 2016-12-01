var inject = require('gulp-inject');
var gulp = require('gulp');

// gulp.src('./src/index.html')
// 	.pipe(inject(gulp.src('./src/importantFile.js', {
// 		read: false
// 	}), {
// 		starttag: '<!-- inject:head:{{ext}} -->'
// 	}))
// 	.pipe(inject(gulp.src(['./src/*.js', '!./src/importantFile.js'], {
// 		read: false
// 	})))
// 	.pipe(gulp.dest('./dist'));


var mapJson = require('./map.json');
console.log(mapJson);

for (key in mapJson) {
	// console.log(key + mapJson[key])
	fn_loopInject(key, mapJson[key])
}

function fn_loopInject(key, value) {
	gulp.src('./src/' + key + '.html')
		.pipe(inject(gulp.src(value), {
			transform: function(filepath, file, i, length) {
				console.log(filepath)
					// var arrPath = filepath.split('/');
					// var lastname = arrPath[arrPath.length - 1];
					// lastname = lastname.substring(0, lastname.lastIndexOf("."));

				// var outpath;
				// for (key in mapJson) {
				// 	console.log(key + mapJson[key])
				// 	if (key = lastname) {
				// 		outpath = mapJson[key];
				// 		break;
				// 	}
				// }
				// console.log("outpath:" + outpath)
				// if (!outpath) {
				// 	return '';
				// }
				return '<script src="' + filepath + '"' + '></script>';
			}
		}))
		.pipe(gulp.dest('./dist'));
}