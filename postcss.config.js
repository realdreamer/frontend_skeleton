module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      postcssPresetEnv(/* pluginOptions */)
    ],
    sourceMap: true,
  }
}
