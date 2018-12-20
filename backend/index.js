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

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Listening on port " + port);
