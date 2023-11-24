let http = require("http"); //node.js가 가지고 있는 모듈

function start(router, handle) {
  function onRequest(request, response) {
    console.log("dd" + new URL(request.url).pathname);
    let pathname = new URL(request.url).pathname;
    router(pathname, handle, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Hello Node.js");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  //localhost:8888
}
exports.start = start;
