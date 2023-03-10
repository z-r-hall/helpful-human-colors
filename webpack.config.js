const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: '/public/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: '8080',
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: 'build',
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|svg)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader' 
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/, /client\/stylesheets\/modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(css|scss)$/,
        include: [/client\/stylesheets\/modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        type:"asset/resource",
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, 
            },
          },
        ],
      },
    ],
  },
};