var fs = require('fs');

fs.rmdir('./1/11', function(err) {
	if (err) {
		return console.error(err);
	}

})