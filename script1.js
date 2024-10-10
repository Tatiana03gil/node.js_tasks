const http = require("http");

let counter1 = 0;
let counter2 = 0;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      counter1++;
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(
        `<h1>Корневая страница</h1><p>Просмотров: ${counter1}</p><a href="/about">Перейти на страницу about</a>`
      );
      break;
    case "/about":
      counter2++;
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end(
        `<h1>About</h1><p>Просмотров: ${counter2}</p><a href="/">Перейти на главную страницу</a>`
      );
      break;
    default:
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end("<h1>Нет такой страницы</h1>");
      break;
  }
});

const port = "3000";

server.listen(port);
