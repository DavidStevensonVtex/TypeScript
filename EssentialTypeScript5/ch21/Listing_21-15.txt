// Listing 21.15 The contents of the server.js file in the webapp folder

const express = require("express");
const jsonServer = require("json-server");
const history = require("connect-history-api-fallback");

const app = express();

app.use("/", express.static("dist"));
app.use("/", express.static("assets"));

const router = jsonServer.router("data.json");
app.use(jsonServer.bodyParser);
app.use("/api", (req, resp, next) => router(req, resp, next));

app.use(history());
app.use("/", express.static("build"));

const port = process.argv[3] || 4002;
app.listen(port, () => console.log(`Running on port ${port}`));