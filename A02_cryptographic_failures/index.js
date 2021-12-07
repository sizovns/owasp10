import express from "express";
import fs from "fs";
const app = express();
const port = 8001;


app.get("/", (req, res) => {
	fs.readFile("./index.html", (error, data) => {
		res.end(data);
	});
});

app.get("/**", (req,res) => {
	fs.readFile(req.url, (error, data) => {
		res.end(data)
	});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

