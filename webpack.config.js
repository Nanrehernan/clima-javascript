const loader = require("css-loader")
const HTMLPlugin = require("html-webpack-plugin")
const path = require("path")

const ruleCSS = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
}

const plugin = [new HTMLPlugin({
    template: "./src/index.html"
})]

const devServer = {
    port: 3000
}

const output = {
    path: path.join(__dirname, "docs"),
    filename: "main.js"
}

module.exports = {
    entry: "./src/index.js",
    output: output,
    devServer: devServer,
    module: {
        rules: [ruleCSS]
    },
    plugins: plugin
}