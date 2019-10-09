import * as autoprefixer from 'autoprefixer';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import webpack from 'webpack';

const scssCommon = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      localIdentName: '[local]__[hash:base64:5]',
      modules: true,
      sourceMap: process.env.NODE_ENV !== 'production',
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer({grid: 'no-autoplace', browsers: ['>1%']})],
    },
  },
  {
    loader: 'sass-loader',
  },
];

const test = /\.scss$/;

// Mode specific loaders
export const scssDev: webpack.RuleSetRule = {
  test,
  use: [{loader: 'style-loader'}, ...scssCommon],
};

export const scssProd: webpack.RuleSetRule = {
  include: path.resolve(__dirname, '../../src/'),
  test,
  use: [MiniCssExtractPlugin.loader, ...scssCommon],
};
