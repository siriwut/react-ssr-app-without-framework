const path = require('path')
console.log('heyyy')
module.exports = {
  mode: 'production',
  entry: {
    client: [
      '@babel/polyfill',
      path.join(__dirname, 'src', 'client.js'),
    ],
  },
  output: {
    path: path.join(__dirname, 'build', 'public'),
    publicPath: '/',
    filename: '[name].js',
  },
  target: 'web',
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],

    alias: {
      '@material-ui/core': '@material-ui/core/es',
    },
  },
  plugins: [],
}
