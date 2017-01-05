module.exports = {
    entry: "./index.js",
    output: {
        path: "./bin",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    },
    devServer: {
        historyApiFallback: true
    }

}