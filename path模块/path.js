const fs = require('fs');
const path = require('path');

//拼接路径
path.resolve(__dirname,'./test.txt'); // absolute path

console.log(`output->path.sep`, path.sep);

console.log(`output->path.parse(__filename)`, path.parse(__filename));

console.log(`output->path.basename`, path.basename(__filename));