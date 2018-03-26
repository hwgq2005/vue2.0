const path = require('path')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');

//独立样式文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin('style/[name].css');

module.exports = {
  
  entry: {
    main:'./src/main.js'

  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {

          // 打包在页面
          // loaders: {
          //   'scss': 'vue-style-loader!css-loader!sass-loader',
          //   'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          // }

          // 打包在单独文件
          loaders: {
            'scss': extractSass.extract([ 'css-loader', 'sass-loader' ]),
            'sass': extractSass.extract([ 'css-loader', 'sass-loader' ])
          }
         
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract([ 'css-loader', 'sass-loader' ])
      },
      {
        test: /\.css$/,
        use: extractSass.extract([ 'css-loader', 'sass-loader' ])
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: 'font/[name].[ext]?[hash]'
        }
      }, 
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './src/index.html',
        minify: {
              caseSensitive: false,
              collapseBooleanAttributes: true,
              collapseWhitespace: true
         },
        hash: true,
        inject: true
        // ,chunks: ['js/build']
    })
    // ,
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery"
    // })
  ],

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
      // 'jquery': path.resolve(__dirname, './src/assets/global/plugins/jquery.min') 
    }
  },

  // devServer: {
  //     host: '192.168.0.129',
  //     port: '8070',
  //     contentBase: 'dist/',
  //     historyApiFallback: true
  // },

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {

  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true //压缩
    })
    
  ])
}
