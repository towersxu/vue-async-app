var webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.(png|jpg)$/, loader: 'file' },
      //{ test: /\.(png|jpg)$/, loader: 'url?limit=10000'},
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "Vue":"vue"
    }),
    new webpack.ProvidePlugin({
      "$":"jquery"
    })
  ],
  devServer:{
    hot:true,
    inline:true,
    proxy: {
      '/v/*':{
        target: 'http://127.0.0.1:19110',
        secure: false
      },
      '/web/*':{
        target: 'http://192.168.1.21:8080',
        secure:false
      }
    }
  },
  devtool: '#source-map'
}
