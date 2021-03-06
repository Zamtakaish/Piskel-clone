module.exports = {
  entry: './assets/scripts/script.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'production',
  watch: true,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/pictures/',
            },
          },
        ],
      },
      {
        test: /\.(cur)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/pictures/cursor',
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/fonts/',
          },
        }],
      },
      {
        test: /\.worker\.js$/,
        use: [{
          loader: 'worker-loader',
        }],
      },
    ],
  },
};
