module.exports = {
    publicPath: '/',
    devServer: {
        open: true,//启动项目后自动开启浏览器
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};