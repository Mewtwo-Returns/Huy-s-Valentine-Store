// import webpack from 'webpack';
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'client/build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader:'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }}],
        exclude: /node_modules/,
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/, /client\/stylesheets\/modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: {
      directory: './client/build',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) =>
        '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
        htmlWebpackPlugin.options.title +
        '</title></head><body><div id="root"></div></body></html>',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

module.exports = config;