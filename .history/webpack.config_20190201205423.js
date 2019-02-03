const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

const environments = {
  'development': 'dev',
  'production': 'prod',
};

module.export = ({ mode, presets } = { mode: 'development', presets: [] }) => {
  const envConfig = require(`./webpack/webpack.${environments[mode]}`);
  const presetsConfig = {};

  return webpackMerge(commonConfig, envConfig, presetsConfig)
};