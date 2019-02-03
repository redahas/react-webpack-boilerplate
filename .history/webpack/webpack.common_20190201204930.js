import path from 'path';

module.export = {
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    chunkFilename: "[name].lazy-chunk.js"
  }
};
