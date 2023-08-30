const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: 'CNAME', to: 'CNAME', toType:"file" }]
      })
    ]
  }
}