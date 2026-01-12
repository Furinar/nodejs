const fs = require('fs');

const ws=fs.createWriteStream("./4.test.txt");

ws.write("hello ");
ws.write("world\n");
ws.write("this is write stream example.\n");

ws.close();