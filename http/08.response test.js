const http = require("http");
const fs = require('fs');
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    
    const tableHTML = fs.readFileSync(__dirname+'/08.table.html', 'utf-8');
    response.write(tableHTML);
    response.end();
});


server.listen(9000, (err) => {
    if (err) {
        console.error('启动服务失败', err);
        return;
    }
    console.log('服务已启动,goto http://localhost:9000');
})