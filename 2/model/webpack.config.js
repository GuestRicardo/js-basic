const patch = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        patch: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js',
    },
    module: {
        rules:[{
            exclude: /node_modules/,
            test: /\.js/
        }]
    },
    devtool: 'source-map'
};