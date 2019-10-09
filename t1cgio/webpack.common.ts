import * as autoprefixer from 'autoprefixer';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import webpack from 'webpack';

import images from './webpack/rules/images';
import json from './webpack/rules/json';
import otf from './webpack/rules/otf';
import svg from './webpack/rules/svg';
import tsx from './webpack/rules/tsx';

import alias from './webpack/alias';

const config: webpack.Configuration = {};

// Entry
config.entry = ['es6-promise/auto', './src/index.tsx'];

// Output
config.output = {
  chunkFilename: '[name]_[hash].bundle.js',
  filename: 'main_[hash].js',
  path: path.resolve(__dirname, 'dist'),
};

// Rules
config.module = {rules: []};
config.module.rules.push(tsx);
config.module.rules.push(json);
config.module.rules.push(svg);
config.module.rules.push(otf);
config.module.rules.push(images);

config.resolve = {
  alias,
  // No other extensions should be added here. Any more would make it more
  // confusing within the code as to what type of file is being imported
  extensions: ['.tsx', '.ts', '.js'],
};

config.plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
];

export default config;
