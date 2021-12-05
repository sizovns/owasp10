import express from "express";
const app = express();
const port = 8001;

app.get("/", (req, res) => {
  res.send(
    "<html>" +
      "<title>Hello page</title>" +
      '<body>To get info about application go to "/getappInfo"</body>' +
      "</html>"
  );
});

app.get("/getappInfo", (req, res) => {
  res.send(
    "<html>" +
      "<title>Users info page</title>" +
      "<body>There is users info page about app" +
      "<br/> Here will be some info about application, it version, may be some intetesting info about bussiness logic etc" +
      "<br/> Try to find admin page with get info about app" +
      "</body>" +
      "</html>"
  );
});

app.get("/admin/getappInfo", (req, res) => {
  res.send(
    "<html>" + 
    "<title>Admin info page</title>" +
    "<body>" +
    "Small demonstation of Broken Access Control." +
    "<br/>This page shoud be closed by admin rights and users (espessialy unauthorized), should not see it" +
    "<p><b>flag{br0ken_4cc3ss_c0ntr0l}</b></p>" +
    "</body>" +
    "</html>"
  );
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
