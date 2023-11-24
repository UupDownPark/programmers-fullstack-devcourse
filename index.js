let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");

server.start(router.router, requestHandler.handle);
//모듈을 사용하는 역할
