import webpack from 'webpack';

const json: webpack.RuleSetRule = {
  test: /\.json$/,
  type: 'javascript/auto',
  use: ['file-loader'],
};

export default json;
