
/* eslint-disable import/no-extraneous-dependencies */

const postCssFlexBugs = require('postcss-flexbugs-fixes');
const autoPrefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      postcssPresetEnv(/* pluginOptions */),
      postCssFlexBugs,
      autoPrefixer,
    ],
    sourceMap: true,
  },
};
