const fs = require("fs");
const http = require("http");
const url = require("url");

////////////////////////////////
//文件

//阻塞同步方法
//const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
//console.log(textIn);
//const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync("./txt/output.txt", textOut);
//console.log("File wirtten!");

//非阻塞异步方式
//fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//console.log(data2);
//fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//console.log(data3);

//fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//console.log("Your file has been written 😁");
//});
//});
//});
//});
//console.log("Will read file!");

////////////////////////////////////
//服务器
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productDataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!<h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
