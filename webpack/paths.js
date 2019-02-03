const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/app'),
  favicon: path.resolve(__dirname, '../', 'favicon.png'),
  alias: {
    Components: path.resolve(__dirname, '../', 'src/components/'),
  }
};