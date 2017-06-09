var path = require('path');

module.exports = {
  entry: './source/main.js',
  output: {
    filename: 'minicarto.js',
    path: path.resolve(__dirname, 'lib')
  }
};
