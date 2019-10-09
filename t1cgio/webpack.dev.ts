import * as path from 'path';
import webpack from 'webpack';

import common from './webpack.common';
import {scssDev} from './webpack/rules/scss';

const config: webpack.Configuration = {...common};

config.devtool = 'inline-source-map';
config.mode = 'development';

config.devServer = {
  compress: true,
  contentBase: path.resolve(__dirname, 'dist'),
  historyApiFallback: true,
  host: '0.0.0.0',
  hot: true,
  port: 4001,
};

// Dev specific loaders
config.module.rules.push(scssDev);

// Output
config.output.publicPath = '/';

export default config;
