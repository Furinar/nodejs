const http = require('http');
const url = require('url');
const server = http.createServer((request, response) => {
    response.end('hello world');

    const res = url.parse(request.url, true);

    console.log(res.pathname);
    console.log(res.query);
})

server.listen(9000, (err) => {
    if (err) {
        console.error('启动服务失败', err);
        return;
    }
    console.log('服务已启动,goto http://localhost:9000');
});