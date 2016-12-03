(function() {
	'use strict';

	var rf = require("fs");
	var env = require('jsdom').env;
	rf.readFile("./src/index.html", 'utf-8', function(err, data) {
		if (err) {
			console.log("error");
		} else {
			console.log(data);
			fn_readhtml(data);
		}
	});

	function fn_readhtml(html) {
		// first argument can be html string, filename, or url
		env(html, function(errors, window) {
			// console.log(errors);

			var $ = require('jquery')(window);

			console.log("module:" + $('body').attr("module"));
		});
	}

}());