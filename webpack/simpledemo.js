'use strict'; // eslint-disable-line strict

const pkg = require('../package.json');
const path = require('path');

const DEBUG = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';

module.exports = {
  context: path.join(__dirname, '../public'),
  cache: DEBUG,
  debug: DEBUG,
  watch: DEBUG,
  devtool: DEBUG || TEST ? '#inline-source-map' : false,
  target: 'web',
  entry: './scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(pkg.config.buildDir)
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ],
    noParse: [
      './public/scripts/dist/'
    ]
  }
};
