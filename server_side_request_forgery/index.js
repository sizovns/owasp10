var needle = require("needle");
var express = require("express");
var app = express();
const port = 8001;
// Currently this app is also vulnerable to reflective XSS as well. Kind of an easter egg :)

app.get("/", function (request, response) {
  if (Object.keys(request.query).length === 0) {
    response.send(
      "<html><body>" +
        "<p />Try to get flag from http://[server]:[port]/admin" +
        "<p />Try to use url getter http://[server]:[port]/?url=[URL]" +
        "</body></html>"
    );
    return;
  }
  var url = request.query["url"];
  if (request.query["mime"] == "plain") {
    var mime = "plain";
  } else {
    var mime = "html";
  }

  console.log("New request: " + request.url);

  needle.get(url, { timeout: 3000 }, function (error, response1) {
    if (!error && response1.statusCode == 200) {
      response.writeHead(200, { "Content-Type": "text/" + mime });
      response.write("<h1>Welcome to SSRF demo.</h1>\n\n");
      response.write(
        '<h2>I am an application. I want to be useful, so I requested: <font color="red">' +
          url +
          "</font> for you\n</h2><br><br>\n\n\n"
      );
      console.log(response1.body);
      response.write(response1.body);
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "text/" + mime });
      response.write("<h1>Welcome to SSRF demo.</h1>\n\n");
      response.write(
        '<h2>I wanted to be useful, but I could not find: <font color="red">' +
          url +
          "</font> for you\n</h2><br><br>\n\n\n"
      );
      response.end();
      console.log("error");
    }
  });
});

app.get("/admin", (request, response) => {
  if (request.ip.includes("127.0.0.1")) {
    response.send("flag{$3rv3r-$1d3-r3que$t-f0rg3ry}");
    return;
  }
  response.send("Forbbiden");
});

app.listen(port);
console.log("#\n#  Server listening for connections on port:" + port);
