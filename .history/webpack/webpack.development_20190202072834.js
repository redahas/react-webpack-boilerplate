module.exports = () => ({
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../', 'build'),
    compress: true,
    port: 8000
  }
});
