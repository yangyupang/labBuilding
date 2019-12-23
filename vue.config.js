module.exports = {
    devServer: {
        proxy: {
            "/api": {
                ws: false,
                target: "http://120.78.14.107/api/v2/index",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}