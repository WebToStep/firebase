const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[chunkhash].js'
  },
  devServer: {
    port: 8888
  },
  cache: {
    type: 'memory'
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from: './src/img', to: 'img'}
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ca]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|svg|ico|gif)$/i,
        loader: 'file-loader',
        options: {
          name:"img/[name].[ext]"
        }
      }
    ]
  }
}