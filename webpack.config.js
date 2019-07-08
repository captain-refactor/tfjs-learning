const path = require("path");
const {CheckerPlugin} = require("awesome-typescript-loader");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: "source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    useCache: true,
                    forceIsolatedModules: true,
                    reportFiles: ['./src/index.ts']
                }
            }
        ]
    },
    plugins: [new CheckerPlugin()]
};
