const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../', 'src/app'),
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'bundle.js',
    chunkFilename: '[name].lazy-chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@16/umd/react.development.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
          global: 'ReactDOM',
        },
      ],
    })
  ],
};

// // Dev CDN externals
// <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
// // Production CDN externals
// <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>