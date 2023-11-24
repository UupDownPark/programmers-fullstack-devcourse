function main(response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Main");
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
