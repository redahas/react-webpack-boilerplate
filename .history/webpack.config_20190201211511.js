const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

const getEnvConfig = env => require(`./webpack/webpack.${env}`)(env);
const presetConfig = require('./webpack/utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'development', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      ...commonConfig,
    },
    getEnvConfig(mode),
    presetConfig({ mode, presets }),
  );
};