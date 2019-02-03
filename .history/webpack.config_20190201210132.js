const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

const getEnvConfig = env => require(`./webpack/webpack.${env}`)(env);

module.export = ({ mode, presets } = { mode: 'development', presets: [] }) => {
  const presetsConfig = {};

  return {
    mode: 'development'
  };
  // return webpackMerge(
  //   {
  //     mode,
  //     ...commonConfig(),
  //   },
  //   getEnvConfig(mode)
  // );
};