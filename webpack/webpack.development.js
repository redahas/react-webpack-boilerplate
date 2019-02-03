const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const paths = require('./paths');

module.exports = () => ({
  mode: 'development',
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@16/umd/react.production.min.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ]
});
