import express from "express";
const app = express();
const port = 8001;
import { all } from "./database.js";

app.get("/", (req, res) => {
  res.send(
    "<html><body>" +
      "<br/>Try to get admin password (this is flag)." +
      "<br/>We have 2 apis" +
      "<br/>1. /api/users - for all users." +
      "<br/>2. /api/user/:id to get user by id." +
      "</body></html>"
  );
});

app.get("/api/users", (req, res) => {
  all("select id, username from user", function (error, results) {
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }
    res.json({
      message: "success",
      data: results,
    });
  });
});

app.get("/api/user/:id", (req, res) => {
  const sql = `SELECT id,username FROM user WHERE id = ${req.params.id}`;
  console.log("Query: " + sql);
  all(sql, function (error, results) {
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }
    res.json({
      message: "success",
      data: results,
    });
  });
});

// sqli working with:
// 1 union all select username,password from user where id=1

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
