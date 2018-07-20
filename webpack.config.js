var path = require('path');

module.exports = {
    entry: {
       App: "./app/assets/scripts/App.js",
       Vendor: "./app/assets/scripts/Vendor.js"
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, 'app/temp/scripts'),
        filename: "[name].js"
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