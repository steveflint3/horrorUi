import {RuleSetRule} from 'webpack';

const images: RuleSetRule = {
  test: /(\.jpe?g|\.webp|\.png|\.ico)/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
      },
    },
  ],
};

export default images;
