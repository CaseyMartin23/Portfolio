const express = require("express");
const path = require("path");
const emailer = require("./emailer.js");
const app = express();

app.use(express.static(path.join(__dirname, "/../front-end/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(emailer);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../front-end/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App is listening on port " + port);
});
