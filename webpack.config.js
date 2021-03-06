module.exports = {
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['react', 'es2015']
                }
            }
        ]
    },
    node: {
      fs: 'empty',
      net: 'empty',
      module: 'empty',
      tls: 'empty'
    }
};
