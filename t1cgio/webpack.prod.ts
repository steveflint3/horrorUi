import CleanWebpackPlugin from 'clean-webpack-plugin';
import * as CopyPlugin from 'copy-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import webpack from 'webpack';

import common from './webpack.common';
import {scssProd} from './webpack/rules/scss';

const config: webpack.Configuration = {...common};

// Prod specific loaders
config.module.rules.push(scssProd);

config.plugins.push(new CleanWebpackPlugin());

config.plugins.push(
  new MiniCssExtractPlugin({
    chunkFilename: '[id]_[chunkhash].css',
    filename: `[name]_[chunkhash].css`,
  })
);

config.plugins.push(new CopyPlugin(['./src/robots.txt']));

config.optimization = {
  minimizer: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'static' : 'disabled',
    }),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: false,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
  splitChunks: {
    chunks: 'all',
  },
};

// Output
config.output.publicPath = `/`;

export default config;
