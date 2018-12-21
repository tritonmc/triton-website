const express = require("express");
const path = require("path");
const app = express();

app.disable("x-powered-by");

app.use(require("./redirect.js"));

app.get("/documentation/list", (_req, res) =>
  res.sendFile(path.join(__dirname, "docs", "index.json"))
);

app.use(
  "/documentation/page",
  express.static(path.join(__dirname, "docs", "markdown"), { extensions: ["md"] })
);

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Listening on port " + port);
