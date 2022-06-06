const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/app': {
                // target: 'http://175.24.175.35:9000/',
                target: 'http://10.1.188.121:9000/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/app': ""
                }
            }
        }
    }
})
