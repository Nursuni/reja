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
app.set("view engine", "ejs"); //html frontendni backendda ishlatish uchun //BSSRendering engine
//Single Page Application (SPA) - bitta html fayl
//Multi Page Application (MPA) - ko'p html faylgi

// 4: Routing codes
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

// Server setup
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port ${PORT}`);
});
