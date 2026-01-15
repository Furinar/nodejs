function tiemo()
{
    console.log("这是一个模板化的初体验示例代码。");
}

function niejiao() {
    console.log("这是一个模板化的暴露数据示例代码。");
}

//1 module.exports暴露数据
// module.exports = {
//     tiemo,
//     niejiao
// };

//2 exports.xxx暴露数据
exports.tiemo = tiemo;
exports.niejiao = niejiao;
exports.test = "测试数据";
exports.num = 12345;
//不能使用exports = {tiemo, niejiao}，因为exports只是module.exports的引用

