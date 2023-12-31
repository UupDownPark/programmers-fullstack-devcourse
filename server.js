let http = require("http"); //node.js가 가지고 있는 모듈

function start(router, handle) {
  function onRequest(request, response) {
    let baseUrl = "http://localhost:8888/";
    console.log(request.url);
    let reqUrl = new URL(request.url, baseUrl);
    let pathname = reqUrl.pathname;
    let queryData = reqUrl.searchParams.get("productId");
    console.log("리퀘스트 유알엘 : " + reqUrl);
    console.log("queryData :" + queryData);
    console.log("pathname : " + pathname);
    router(pathname, handle, response, queryData);
  }
  http.createServer(onRequest).listen(8888);
  //localhost:8888
}
exports.start = start;
