const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  entry: './app/index.ts',
  output: {
    libraryTarget: 'umd',
    library: 'Mep'
  }
})