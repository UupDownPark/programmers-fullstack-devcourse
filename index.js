let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");

const mariadb = require("./database/connect/mariadb");
mariadb.connect();

server.start(router.router, requestHandler.handle);
//모듈을 사용하는 역할
