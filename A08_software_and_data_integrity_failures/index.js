import express from "express";
import cookieParser from "cookie-parser";
import escape from "escape-html";
import { unserialize } from "node-serialize";
const app = express();
const port = 8001;

app.use(cookieParser());

app.get("/", function (req, res) {
  if (req.cookies.profile) {
    const str = new Buffer.from(req.cookies.profile, "base64").toString();
    const obj = unserialize(str);
    if (obj.username) {
      res.send("Hello " + escape(obj.username));
      return;
    }
    if (req.cookies.profile == "eyJyY2UiOiJfJCRORF9GVU5DJCRfcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2NhdCBmbGFnLnR4dCcsIGZ1bmN0aW9uKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgeyBjb25zb2xlLmxvZyhzdGRvdXQpIH0pIn0=") {
      require('child_process').exec('cat flag.txt', (error, stdout, stderr) => {
        res.send(stdout);
      });
      return;
    }
  } else {
    res.cookie(
      "profile",
      "eyJ1c2VybmFtZSI6ImFqaW4iLCJjb3VudHJ5IjoiaW5kaWEiLCJjaXR5IjoiYmFuZ2Fsb3JlIn0=",
      { maxAge: 900000, httpOnly: true }
    );
  }
  res.send("<html><body>Hello! If you refresh page you will get a default profile cookie. <p />Try desirialization injection. <p />More info -> https://opsecx.com/index.php/2017/02/08/exploiting-node-js-deserialization-bug-for-remote-code-execution/</body></html>");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
