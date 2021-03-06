var express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

// Route to Login Page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

app.post("/login", (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  if (username === 'admin' && password === 'admin') {
    res.send("flag{1d3ntificat1on_4nd_4uth3nt1c4t1on_f41lur3s}");
    return;
  }
  res.send("Incorrect username or password");
});

const port = 8001;
app.listen(port, () => console.log(`This app is listening on port ${port}`));
