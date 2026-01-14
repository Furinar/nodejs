const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    // response.end('Hello, http!');
    response.end('<h1>你好，世界</h1>');
})

server.listen(9000, (err) => {
    if (err) {
        console.error('启动服务失败', err);
        return;
    }
    console.log('服务已启动,goto http://localhost:9000');
})