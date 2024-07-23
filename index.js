const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview!");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    fs.readFile("./dev-data/data.json");

    res.end("API");
  } else {
    res.writeHead(404, {
      "Content-type": "/text/html",
      "my-own-header": "hello-world",
    });
    res.end("Page not found!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("<h1>Listening to requests on port 8000</h1>");
});
