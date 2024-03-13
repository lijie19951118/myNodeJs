const fs = require('fs');

function addMapping(router, mapping) {
	for (const url in mapping) {
		if (url.startsWith('GET')) {
			// 如果url类似"GET xxx":
			const path = url.substring(4);
			// get请求
			router.get(path, mapping[url]);
			console.log(`register URL mapping: GET ${path}`);
		} else if (url.startsWith('POST')) {
			// 如果url类似"POST xxx":
			const path = url.substring(5);
			// post请求
			router.post(path, mapping[url]);
			console.log(`register URL mapping: POST ${path}`);
		} else {
			// 无效的URL:
			console.log(`invalid URL: ${url}`);
		}
	}
};

function addControllers(router, dir) {
	// 先导入fs模块，然后用readdirSync列出文件
	// 这里可以用sync是因为启动时只运行一次，不存在性能问题:
	const files = fs.readdirSync(__dirname + '/controllers');
	console.log(files);

	// 过滤出.js文件:
	const js_files = files.filter(f => {
		return f.endsWith('.js');
	});

	// 处理每个js文件:
	for (const f of js_files) {
		console.log(`js文件：${f}`);
		// 导入js文件:
		const mapping = require(__dirname + '/controllers/' + f);
		addMapping(router, mapping);
	}
}

module.exports = function (dir = 'controllers') {
	const router = require('koa-router')();
	addControllers(router, dir);
	return router.routes();
}