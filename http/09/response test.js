const http = require("http");
const fs = require("fs");

const contentTypeMap = {
  html: "text/html;charset=utf-8",
  js: "application/javascript;charset=utf-8",
  css: "text/css;charset=utf-8",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
};
const server = http.createServer((request, response) => {
  response.statusCode = 200;

  const { pathname } = new URL(request.url, "http://localhost:9000"); 
  const filePath = __dirname + pathname;
  // console.log(`output->pathname`, pathname);
  // console.log(`output->__dirname `,__dirname)
  // console.log(`output->filePath`, filePath);
  fs.readFile(filePath, (error, data) => {
    if (error) {

      console.log(`output->error`, error)
      response.statusCode = 404;

      response.write("404, not found");
      response.end();
      return;
    }
    const ext = filePath.match(/\.(\w+)$/)[1];
    
    const type = contentTypeMap[ext];

    if (type)
    {
      response.setHeader("Content-Type", type);
    } else {
      response.setHeader("Content-Type", "application/octet-stream");
    }
    //
    response.write(data);
    response.end();
  });
});

server.listen(9001, (err) => {
  if (err) {
    console.error("启动服务失败", err);
    return;
  }
  console.log("服务已启动,goto http://localhost:9001");
});
