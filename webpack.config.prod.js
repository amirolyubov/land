const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

const config = {
  mode: 'production',
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, 'public/bundles')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }, {
            loader: 'postcss-loader',
            options: {
                plugins: () => [require('autoprefixer')({
                    'browsers': ['> 1%', 'last 2 versions'],
                })],
                minified: true
            }
        }]
      },
      {
        test: /\.(gif|png|jpe?g|svg|mp4|woff|woff2|ttf)$/i,
        use: ['url-loader'],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
}
module.exports = config
