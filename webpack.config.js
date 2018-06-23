const path = require('path');
const CLIENT_DIR = path.join(__dirname, './client');
const DIST_DIR = path.join(__dirname, './public');

module.exports = {
  entry: `${CLIENT_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'],
          },
        },
      },
      {
        test: /\.(png|jp(e*)g)$/,
        include: CLIENT_DIR,
        loader: 'url-loader',
        options: {
          limit: '25000',
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      }
    ],
  },
  mode: 'development',
};
