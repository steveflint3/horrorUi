import {RuleSetRule} from 'webpack';

const svg: RuleSetRule = {
  exclude: /node_modules/,
  test: /\.svg$/,
  use: {
    loader: 'svg-react-loader',
    options: {
      name: 'NavLogo',
    },
  },
};

export default svg;
