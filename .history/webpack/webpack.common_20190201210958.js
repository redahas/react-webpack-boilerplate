const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../', '/src/app'),
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'bundle.js',
    chunkFilename: '[name].lazy-chunk.js'
  }
};
