const products = [{
	name: 'iPhone',
	price: 6999
}, {
	name: 'Kindle',
	price: 999
}];

const getList = async (ctx, next) => {
	ctx.response.type = 'application/json';
	ctx.response.body = {
		products
	}
}

const add = async (ctx, next) => {
	const {name, price} = ctx.request.body;
	console.log(ctx.request.body)
	const p = {
		name,
		price
	};
	console.log(p)
	products.push(p);
	ctx.response.type = 'application/json';
	ctx.response.body = p;
}

// fetch('http://127.0.0.1:1118/api/products',{
//     headers: {
//       'content-type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify({
//         name: 111,
//         price: 2222222
//     })
// }).then(r=> {
//     return r.json();
// }).then(e=>{
//     console.log(e)
// })

module.exports = {
	'GET /api/products': getList,
	'POST /api/products': add
}