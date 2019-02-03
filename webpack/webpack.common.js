const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: paths.entryPath,
  output: {
    path: paths.outputPath,
    filename: 'bundle.js',
    chunkFilename: '[name].lazy-chunk.js'
  },
  resolve: {
    alias: paths.alias,
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      title: 'S I C C - A P P',
    }),
    new FaviconsWebpackPlugin({
      logo: paths.favicon,
      prefix: 'icons-[hash]/',
      persistentCache: true,
      inject: true,
      title: 'favicon',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ],
};