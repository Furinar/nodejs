const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  response.statusCode = 200;

  const { pathname } = new URL(request.url, "http://localhost:9000");
  const filePath = __dirname + pathname;
  // console.log(`output->pathname`, pathname);
  // console.log(`output->__dirname `,__dirname)
  // console.log(`output->filePath`, filePath);
  fs.readFile(filePath, (error, data) => {
    if (error)
    {
      response.statusCode = 404;
      
      response.write("404, not found");
      response.end();
      return;
    }
    response.write(data);
    response.end();
  })
  response.end();
});

server.listen(9000, (err) => {
  if (err) {
    console.error("启动服务失败", err);
    return;
  }
  console.log("服务已启动,goto http://localhost:9000");
});
