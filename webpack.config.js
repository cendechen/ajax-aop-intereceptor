var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './'),
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist'),
    library: 'ajaxAopInterceptor',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    }]
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname, 'src')
    }
  },
  devtool: 'source-map', // 开发的map指定
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}
