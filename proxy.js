module.exports = {
  "/api": {
    target: "http://10.2.2.3:8080",
    pathRewrite: {
      "^/api": "api111111",
    },
    changeOrigin: true,
    logLevel: "info",
  },
  "/api1111": {
    target: "http://10.2.2.3:8888",
    pathRewrite: {
      "^/api1111": "",
    },
    changeOrigin: true,
    logLevel: "info",
  },
};
