const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
app.listen(3000);

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("<h1>its in root route </h1>");
});
app.use((req, res) => {
  res.status(404).send();
});
