var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./js/index.jsx", // 入口文件
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle-[hash].js" // 输出文件,[hash]可解决缓存问题
  },
  module: {
    loaders: [
      {
        test: /\.css$/, // 加载css
        loader: "style-loader!css-loader"
      }, {
        test: /\.jsx?$/, // 加载js、jsx
        exclude: /node_modules/, // react-hot-loader 自动局部刷新组件的修改内容
        loaders: ["react-hot-loader", "babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-0"]
      }, {
        test:/\.(png|jpg)$/, // 加载图片
        loader: "file-loader"
      }
    ]
  },
  resolve: { // import导入模块时可以省略的文件名后缀
    extensions: [".js", ".json", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({ // 生产环境
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new webpack.optimize.UglifyJsPlugin({}), // 压缩混淆js
    new webpack.NoEmitOnErrorsPlugin(), // 不阻塞编译，全部编译后报错
    new HtmlWebpackPlugin({ // 自动将输出文件追加到index.html中
      template: "index.html",
      filename: "index.html"
    }),
  ]
};