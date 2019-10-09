import {RuleSetRule} from 'webpack';

const otf: RuleSetRule = {
  test: /\.otf$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
};

export default otf;
