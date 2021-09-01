require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const paths = {
  dist: 'dist',
  build: 'build',
};

/* -------------------------------------------------------------------------- */

module.exports = {
  target: 'web',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval' : false,
  devServer: {
    contentBase: path.resolve(__dirname, paths.dist),
    port: process.env.PORT,
    writeToDisk: true,
    compress: true,
    overlay: true,
    hot: true,
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, isDevelopment ? paths.dist : paths.build),
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/i,
        exclude: /node_modules/,
        use: [
          isDevelopment ? 'style-loader' : MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      stage: 3,
                      features: {
                        'nesting-rules': true,
                      },
                      autoprefixer: { grid: true },
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new MiniCSSExtractPlugin({
      linkType: false,
      filename: './css/style.css',
    }),
    new CopyPlugin({
      patterns: [{
          from: 'src'
      }]
  })
  ],
};