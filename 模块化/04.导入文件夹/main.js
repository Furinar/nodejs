const app = require("./module");

console.log(app);
//默认会加载module目录下的package.json文件，寻找main字段指定的入口文件
//如果没有package.json文件，则会寻找index.js/index.json文件作为入口文件