const mariadb = require("./database/connect/mariadb");
const fs = require("fs");
//파일싱크의 약자
const read_main = fs.readFileSync("./main.html", "utf-8");
const read_orderlist = fs.readFileSync("./orderlist.html", "utf-8");
function main(response) {
  mariadb.query("SELECT * FROM product", function (err, rows) {
    console.log(rows);
  });
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(read_main);
  response.end();
}
function redRacket(response) {
  fs.readFile("./img/redRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}
function blueRacket(response) {
  fs.readFile("./img/blueRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}
function blackRacket(response) {
  fs.readFile("./img/blackRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}
function order(response, productId) {
  response.writeHead(200, { "Content-Type": "text/html" });
  mariadb.query(
    "INSERT INTO orderlist VALUES (" +
      productId +
      ",'" +
      new Date().toLocaleDateString() +
      "');",
    function (err, rows) {
      console.log(rows);
    }
  );

  response.write("orderpage");
  response.end();
}
function orderlist(response) {
  response.writeHead("200", { "Content-Type": "text/html" });
  mariadb.query("SELECT * FROM orderlist", function (err, rows) {
    response.write(read_orderlist);
    rows.forEach((element) => {
      response.write(
        "<tr>" +
          "<td>" +
          element.id +
          "</td>" +
          "<td>" +
          element.date +
          "</td>" +
          "</tr>" +
          "</tables>"
      );
    });

    response.end();
  });
}
let handle = {}; //object
handle["/"] = main;
handle["/order"] = order;
handle["/orderlist"] = orderlist;
/* image directory*/
handle["/img/redRacket.png"] = redRacket;
handle["/img/blueRacket.png"] = blueRacket;
handle["/img/blackRacket.png"] = blackRacket;
exports.handle = handle;
