var path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    mode: 'development',
    output: {
        path: path.join(__dirname, 'app/temp/scripts'),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node-modules/
            }
        ]
    }
}