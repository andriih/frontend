const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname,'dist'),
      publicPath: '/dist'
    },
    module: {
        rules: [
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
               
              use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2016"]
                }
              }
            },

            {
              test: /\.scss$/,
              use: extractPlugin.extract({
                use: ['css-loader','sass-loader']
              })
            }
        ]
      },
      
      plugins: [
        extractPlugin
      ]


  };