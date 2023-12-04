const mariadb = require("./database/connect/mariadb");

function main(response) {
  mariadb.query("SELECT * FROM product", function (err, rows) {
    console.log(rows);
  });
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello Node.js");
  response.end();
}
function login(response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Login");
  response.end();
}

let handle = {}; //object
handle["/"] = main;
handle["/login"] = login;

exports.handle = handle;
