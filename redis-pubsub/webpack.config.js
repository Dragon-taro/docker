const path = require("path");

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.join(__dirname, "server/static/js"),
        filename: "bundle.js"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
};