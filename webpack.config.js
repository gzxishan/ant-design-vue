const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const pkgConfig = require('./package');

const VERSION=pkgConfig.version;

const publicPath = `/ant-design-vue/${VERSION}/`;

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath,
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'vue-style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                sourceMap: true,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'ant-design-vue': path.join(__dirname, './components'),
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.jsx', '.vue', '.md'],
  },
  devServer: {
    port: 3000,
    host: '127.0.0.1',
    publicPath,
    openPage:`ant-design-vue/${VERSION}/`,
    historyApiFallback: {
      rewrites: [{ from: /./, to: publicPath }],
    },
    disableHostCheck: true,
    hot: true,
    open: true,
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'site/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
  ],
});
