const path = require("path")
module.exports = {
  mode: "production", // 设置打包的模式，production表示生产模式 development 开发模式
  // entry: "./hello/hello.js", // 用来指定打包时的入口文件 默认 ./src/index.js
  // entry: ["./src/a.js", "./src/b.js"],
  entry: {
    hello: "./src/a.js",
    b: "./src/b.js",
  },
  // entry: "./src/a.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 指定打包目录,必须要绝对路径
    // filename: "main.js", // 打包后的文件名
    filename: "[name]-[id]-[hash].js",
    clean: true, // 自动清理打包目录,清理的是path
  }, // 配置打包后的地址
}
