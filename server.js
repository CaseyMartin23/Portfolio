const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client-side/build")));

app.get("/test", (req, res) => {
  res.json({ test: "TEST is working!!!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client-side/build/index.html"));
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
