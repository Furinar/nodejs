//模块化中要使用相对路径
//js和json文件可以省略后缀名
//C和C++编写的node扩展也可以省略后缀名
//js优先级大于json
const tiemo = require("./me.js");
const jsonFile = require("./test.json");
// const abc = require("./test.abc");//作为js文件处理
// console.log(abc);
console.log(jsonFile);
tiemo();