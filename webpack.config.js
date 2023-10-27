const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/project.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'deploy')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      use: {
        loader: 'url-loader',
      },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Servicios Veterinarios Eläin',
      header: 'Veterinaria',
      metaDesc: 'Servicios Veterinarios a Docimicilio',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  mode: 'release',
  output: {
    clean: true
  }
};
