const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');

const pathsToClean = [paths.outputPath.split('/').pop()];

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, {
      root: paths.root,
      verbose: true,
      dry: false
    }),
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
    }),
  ]
});