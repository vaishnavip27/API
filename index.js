const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    "utf-8"
  );
  const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    "utf-8"
  );
  const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`,
    "utf-8"
  );

  const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
  const dataObj = JSON.parse(data);

  //Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el));

    res.end(tempOverview);

    //Product page
  } else if (pathName === "/product") {
    res.end("This is the product");

    //API
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);

    //Not found
  } else {
    res.end("Page not found!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("<h1>Listening to requests on port 8000</h1>");
});
