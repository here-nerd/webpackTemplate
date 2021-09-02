const path = require('path');

  // for Swift interop
  module.exports = {
    entry: './build/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'myJsLib.js',
      library: 'myJsLib',
    },
  };
