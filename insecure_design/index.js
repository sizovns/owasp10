const express = require("express");
const app = express();
const port = 8001;

app.get("/", (req, res) => {
  res.send(
    "<html><body>" +
      "<title>About me</title>" +
      "<br/><b>Task: Try to find control word on this page and send get request to http://ip:port/restorepass/controlword</b>" +
      "<br/><br/><br/>" +
      "<h1>About me</h1>" +
      "<br/>Hey, this is my homepage, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes." + 
      "<br/><br/><br/>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign. I like delicious food and comfortable shoes; I like good books and romantic movies. I like the land and the nature, I like people. And, I like to laugh." + 
      "<br/><br/>I always wanted to be a great writer, like Victor Hugo who wrote \"Les Miserable\", or like Roman Roland who wrote \"John Christopher\". They have influenced millions of people through their books. I also wanted to be a great psychologist, like William James or Sigmund Freud, who could read people’s mind. Of course, I am nowhere close to these people, yet. I am just someone who does some teaching, some research, and some writing. But my dream is still alive." + 
      "<br/><br/>This is a brief introduction of myself. If you are interested in knowing more, read my articles or take a look at my pictures. Do not expect too much, and keep your sense of humor." +
      "<!-- TODO: to not forgot my control word - cucumber -->" + 
      "</body></html>"
  );
});

app.get("/restorepass/:controlword", (req, res) => {
  if (req.params.controlword === "cucumber") {
    res.send("flag{1ns3cuRe-d3s1gn}");
    return;
  } else {
    res
      .status(400)
      .send(
        "<html><body>" +
          "<br/><b>Wrong control word!</b>" +
          "<br/>Try to find control word on home page." +
          "</body></html>"
      );
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
