import express from "express";
const app = express();
import { exec } from "child_process";

app.get("/", function (req, res) {
  if (Object.keys(req.query).length === 0) {
    res.send("Hey! Try query cmd=id and you will see a commdan injection! 🤔");
    return;
  }
  if (Object.keys(req.query.cmd).length === 0) {
    res.send("cmd query shouldn't be empty");
    return;
  }
  exec(req.query.cmd, (err, stdout) => {
    if (err) {
      res.status(400).send(err + "😭 Try again! 😭");
      return;
    }
    res.status(200).send(stdout + " 😎 Good job! 😎");
    return;
  });
});

app.listen(8001);
