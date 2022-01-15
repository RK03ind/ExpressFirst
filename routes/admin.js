const express = require("express");
const router = express.Router();

router.get("/add-users", (req, res) => {
  res.send(
    `<form method="POST" action="/admin/log-data"><input type="text" name="user"><button type="submit">Submit</button></form>`
  );
});

router.use("/log-data", (req, res) => {
  console.log(req.body);
  if (req.method === "GET") {
    return res.status(403).send();
  }
  res.redirect("/");
});

module.exports = router;
