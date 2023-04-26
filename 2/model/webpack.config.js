const patch = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        patch: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: '',
    }
};