const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   entry: {
       home: "./src/app.js",
       about: "./src/tentang-virus.js",
   },
   output: {
       path: path.join(__dirname, "/dist"),
       filename: '[name].bundle.js',
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader',
            ],
            }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       }),
       new HtmlWebpackPlugin({
        template: "./src/tentang-virus.html",
        filename: "tentang-virus.html"
        }),
   ]
}