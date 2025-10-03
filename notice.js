/*
Frontend Development: BSSR(EJS) vs SPA(React)
BSSR (Backend Server-Side Rendering) with HTML
SPA (Single Page Application) with React/JSON

DEPLOY: joylashtirish,
ishga tushirish,
serverga chiqarish ommaga taqedim

API request
1. Type: Traditional API | Rest API | GraphQL API
2. Method: GET | POST
3. Structure: header | head

Traditional API > REST API
*/

//ESJ(data) > HTML

/* Backendni 4 ta
1.view 2. Routing

*/

//axios Rest API ni yasaydi

/*  1: Kirish codelari
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
  console.log(The server is running successfully on port ${PORT});
}); */
