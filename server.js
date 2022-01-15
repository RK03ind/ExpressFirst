const express = require("express");
const app = express();
app.listen(3000);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-users", (req, res) => {
  res.send(
    `<form method="POST" action="/log-data"><input type="text" name="user"><button type="submit">Submit</button></form>`
  );
});

app.use("/log-data", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.send("<h1>its in root route </h1>");
});
