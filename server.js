let http = require("http"); //node.js가 가지고 있는 모듈

function start(router, handle) {
  function onRequest(request, response) {
    let baseUrl = request.protocol + "://" + request.headers.host + "/";
    let reqUrl = new URL(request.url, baseUrl);
    let pathname = reqUrl.pathname;

    console.log("pathname : " + pathname);
    router(pathname, handle, response);
  }
  http.createServer(onRequest).listen(8888);
  //localhost:8888
}
exports.start = start;
