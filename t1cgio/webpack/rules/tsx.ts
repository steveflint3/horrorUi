import webpack from 'webpack';

const tsx: webpack.RuleSetRule = {
  test: /\.tsx?$/,
  use: 'ts-loader',
};

export default tsx;
