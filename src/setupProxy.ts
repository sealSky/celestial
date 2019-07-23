const proxy = require('http-proxy-middleware');


module.exports = function (app) {
  app.use(
    proxy(
      "/admin",
      {
        target: "http://192.168.1.39:8000",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/admin": "/"
        },
      }
    )
  )
}