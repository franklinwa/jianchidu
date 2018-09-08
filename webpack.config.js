const path = require('path');
var webpack = require('webpack')
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test:/\.js$/,
                        
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: "babel-loader"
            }
        
        ]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
