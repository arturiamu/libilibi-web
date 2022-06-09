const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/app': {
                // target: 'http://localhost:9000/',
                target: 'http://adastra.isamumu.cn:9000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/app': ""
                }
            }
        }
    }
})
