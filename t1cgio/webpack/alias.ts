import * as path from 'path';

const root = path.resolve(__dirname, '../');

// There are duplicate definitions on some imports because of issues caused by
// path's changing while building. If a better solution exists, please update it
const alias = {
  './@assets': path.resolve(root, 'src/assets'),
  './@styles': path.resolve(root, 'src/global/sass'),
  './@util': path.resolve(root, 'src/global/util'),
  '@assets': path.resolve(root, 'src/assets'),
  '@components': path.resolve(root, 'src/components'),
  '@context': path.resolve(root, 'src/global/context'),
  '@routes': path.resolve(root, 'src/routes'),
  '@styles': path.resolve(root, 'src/global/sass'),
  '@util': path.resolve(root, 'src/global/util'),
};

export default alias;
