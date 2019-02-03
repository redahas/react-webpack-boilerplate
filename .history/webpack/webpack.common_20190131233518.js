import path from 'path';

export default {
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
  }
};