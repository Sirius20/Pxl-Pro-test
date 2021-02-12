'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: '/blocks/main/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/project'
  },
  watch: true,

  module: {}
};
