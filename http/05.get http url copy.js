const http = require('http');
const server = http.createServer((request, response) => {
    response.end('hello world');

    const url = new URL(request.url, "http://localhost:9000");

    // console.log(`output->url`, url);
    console.log(url.searchParams.get('id'));
})  

server.listen(9000, (err) => {
    if (err) {
        console.error('启动服务失败', err);
        return;
    }
    console.log('服务已启动,goto http://localhost:9000');
});