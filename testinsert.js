(function() {
	'use strict';

	var fs = require("fs");

	fs.readFile("./src/test.html", 'utf-8', function(err, data) {
		if (err) {
			console.log("error");
		} else {
			// console.log(data);



			var sn = data.indexOf('</head>');
			var nhtml = insert_flg(data, '   <!-- inject:head:js -->\
  <!-- only importantFile.js will be injected here -->\
  <!-- endinject -->', sn);


			var snbody = nhtml.indexOf('</body>');
			console.log("sn:==" + sn)
			var newstr = insert_flg(nhtml, '  <!-- inject:js -->\
  <!-- the rest of the *.js files will be injected here -->\
  <!-- endinject -->', snbody);

console.log(newstr)

			// console.log(nhtml)
		}

	});



}());


function insert_flg(str, flg, sn) {
	var newstr = "";
	console.log(sn)
		// for (var i = 0; i < str.length; i += sn) {

	var tmp = str.substring(0, sn);
	console.log(tmp)


	newstr = tmp + flg + str.substring(sn);;
	
		// }
	return newstr;
}