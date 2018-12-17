const express = require("express");
const app = express();

app.disable("x-powered-by");
app.set("view engine", "ejs");

app.use(require("./redirect.js"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index", { page: { title: "Triton - Translate Your Server" } });
});

app.get("*", (req, res) => {
  res.end("Coming soon!");
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Listening on port " + port);
