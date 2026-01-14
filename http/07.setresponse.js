const http = require('http');

const server = http.createServer((request, response) => {
    //set status code
    response.statusCode = 404;

    //set status message
    response.statusMessage = 'furina';

    //set headers
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Server', 'Furina Server');

    //set body
    response.write('<h1> 404 Not Found</h1>');

    response.end();
})

server.listen(9000, (err) => {
    if (err) {
        console.error('启动服务失败', err);
        return;
    }
    console.log('服务已启动,goto http://localhost:9000');
})