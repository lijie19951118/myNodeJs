const qs = require('qs');

const obj = {
	a: 11,
	b: 222
};

const str = qs.stringify(obj);

console.log(str)