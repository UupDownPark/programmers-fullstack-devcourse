function router(pathname, handle, response) {
  console.log("response" + response);

  if (typeof handle[pathname] == "function") {
    handle[pathname](response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("not found");
    response.end();
  }
}
exports.router = router;
//경로를 찾아주는 역할
