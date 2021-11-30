const express = require("express");
const libxml = require("libxmljs");
const app = express();
const port = 8001;
const bodyParser = require("body-parser");

app.use(bodyParser.text({ type: "application/xml" }));

app.get("/", (req, res) => {
  res.send(
    "<html>" +
      "<title>XXE example</title>" +
      "<h2>Security Misconfiguration XXE</h2>" +
      "<body>you can try curl with XXE to get /usr/src/app/flag.txt, more info -> https://github.com/payloadbox/xxe-injection-payload-list" +
      "<p /> Use POST method for API /parser" +
      "<p /> Do not forget set Content-Type: application/xml" +
      "</body>" +
      "</html>"
  );
});

app.post("/parser", (req, res) => {
  let xmlPayload = req.body;
  try {
    var doc = libxml.parseXml(xmlPayload, { noent: true });
    res.send(doc.toString());
  } catch (e) {
    res.send("Xml parsing error" + e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
