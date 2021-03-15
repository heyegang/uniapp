// vue.config.js
module.exports = {
	devServer: {
		proxy: {
			'/prefix/api/user/list': {
				target: 'http://localhost:7001',
				pathRewrite: {
					'^/prefix': ''
				}
			}
		},
	}
}
