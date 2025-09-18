console.log("Salom, dunyo!");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish codelari
app.use(express.static("public")); //kirib kelyabgan rquestlar uchun public folder ochiq css+ HTML
app.use(express.json()); //json formatdagi malumotlarni qabul qilish uchun
app.use(express.urlencoded({ extended: true })); //htmldan traditionaldan form requestlarni qabul qilish uchun

// 2: Session code
// 3: View codes
app.set("views", "views");
app.set("view engine", "ejs"); //html frontendni backendda ishlatish uchun

// 4: Routing codes
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: red">Hello World by Nursuni!</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style="background: red">siz sovg'alar bo'limidasiz!</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port ${PORT}`);
});
