const webpack = require("webpack");

const appData = require("./data.json");
const { seller, goods, ratings } = appData;
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"],
      },
    },
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true,
    },
  },
  devServer: {
    before(app) {
      app.get("/api/seller", function (req, res) {
        const id = parseInt(req.query.id);

        const newSeller = { ...seller, ...{ id } };
        res.json({
          errno: 0,
          data: newSeller,
        });
      });
      app.get("/api/goods", function (req, res) {
        res.json({
          errno: 0,
          data: goods,
        });
      });
      app.get("/api/ratings", function (req, res) {
        res.json({
          errno: 0,
          data: ratings,
        });
      });
    },
  },

  chainWebpack(config) {
    // 性能优化，去除 moment 的国际化
    config
      .plugin("context")
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
  },
};
