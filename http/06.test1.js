const http = require('http');

const server = http.createServer((request, response) => {
    const { method } = request;
    const { pathname } = new URL(request.url, `http://${request.headers.host}`);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (method === 'GET' && pathname === '/login') {
        response.end('登录界面');
    }
    else if (method === 'GET' && pathname === '/reg')
    {
        response.end('注册界面');
    } else {
        response.end('<h1> 404 Not Found</h1>');
    }
})


server.listen(9000, (err) => {
    if (err) {
        console.error('启动服务失败', err);
        return;
    }
    console.log('服务已启动,goto http://localhost:9000');
});