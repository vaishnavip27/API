const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
  const dataObj = JSON.parse(data);

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview!");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.end("Page not found!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("<h1>Listening to requests on port 8000</h1>");
});
