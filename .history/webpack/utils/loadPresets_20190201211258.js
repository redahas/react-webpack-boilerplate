const webpackMerge = require('webpack-merge');

module.exports = (env = { presets: [] }) => {
  const { presets = [] } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`../presets/webpack.${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfigs);
};
