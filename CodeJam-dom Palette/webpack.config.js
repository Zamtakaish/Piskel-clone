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


    ],

  },

};
