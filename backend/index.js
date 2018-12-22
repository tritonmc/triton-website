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

app.use(
  "/documentation/images",
  express.static(path.join(__dirname, "docs", "img"), { extensions: ["png", "jpg"] })
);

app.use("/javadocs", express.static(path.join(__dirname, "javadoc")));

app.get("/javadocs", (_req, res) => res.sendFile(path.join(__dirname, "javadoc", "index.html")));

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.get("/*", (_req, res) =>
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"))
);

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Listening on port " + port);
