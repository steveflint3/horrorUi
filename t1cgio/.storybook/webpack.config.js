const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = ({config: baseConfig, mode: env}) => {
  baseConfig.module.rules.splice(3, 1);
  baseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  baseConfig.module.rules.push({
    type: 'javascript/auto',
    test: /\.json$/,
    use: ['file-loader'],
  });
  baseConfig.module.rules.push({
    test: /(\.jpe?g|\.webp|\.png)/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  baseConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 2,
          localIdentName: '[local]__[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [autoprefixer({grid: true, browsers: ['>1%']})],
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  });
  baseConfig.module.rules.push({
    test: /\.svg$/,
    exclude: [/node_modules/],
    use: [
      {
        loader: 'svg-react-loader',
        options: {
          jsx: true,
        },
      },
    ],
  });

  baseConfig.module.rules.push({
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
  });
  baseConfig.resolve.extensions.push('.ts', '.tsx');
  baseConfig.resolve.alias = {
    '@routes': path.resolve(__dirname, '../src/routes'),
    '@components': path.resolve(__dirname, '../src/components'),
    '@styles': path.resolve(__dirname, '../src/global/sass'),
    './@styles': path.resolve(__dirname, '../src/global/sass'),
    '@assets': path.resolve(__dirname, '../src/assets'),
    './@assets': path.resolve(__dirname, '../src/assets'),
    '@util': path.resolve(__dirname, '../src/global/util'),
    './@util': path.resolve(__dirname, '../src/global/util'),
  };
  return baseConfig;
};
