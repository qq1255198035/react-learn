const proxy = require("http-proxy-middleware");
console.log(1)
module.exports = function(app) {
    app.use(
        proxy("/api", {
            target: "http://localhost:3000",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/" // 把/api 变成空
            }
        })
    );
};
