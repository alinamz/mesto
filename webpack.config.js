// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// module.exports = {
//   entry: { main: './src/pages/index.js' },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js',
//     publicPath: ''
//   },
//   mode: 'production',
//   devServer: {
//     static: path.resolve(__dirname, './dist'),
//     compress: true,
//     port: 8080,

//     open: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: 'babel-loader',
//         exclude: '/node_modules/'
//       },
//       {
//         test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, {
//           loader: 'css-loader',
//           options: {url: false, importLoaders: 1}
//         },
//         'postcss-loader']
//       },
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html' // путь к файлу index.html
//     }),
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin()
//   ],
// }

const path = require('path'); // стандартная утилита Node.js для построения путей
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // __dirname - глобальная константа, указывающая на каталог, гле лежит этот файл
  entry: path.resolve(__dirname, 'src/pages', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // contenthash каждый раз новый, чтобы файлы не кэшировались
    clean: true, // удалять каталог dist
  },
  devtool: 'inline-source-map', // показывает ошибки в исходных файлах
  module: {
    rules: [
      // загружаем js-библиотеки
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // загружаем изображения и шрифты
      {
        test: /\.(png|svg|jpg|gif|ico|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      // загружаем css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    // подключаем плагин, загружаем html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    // подключаем плагин
    new MiniCssExtractPlugin(),
  ],
};

