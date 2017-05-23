var path = require('path'),
    webpack = require('webpack'),
    CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  entry: [
      './src/index.js'
  ],
  output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                 exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ["lodash", "add-module-exports"]
                }
            },
            {
                test: /\.css$/,
                 exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
  plugins: [
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true,
        hot: true
    }
};