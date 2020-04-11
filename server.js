const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.set('views', './views');
app.use(express.static('public'));
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

const db = require('./public/database.js');

let data = {
  "General": [],
  "fav brew method?": [
    {
      title: "aeropress",
      author: "mattata",
      time: "6:04pm 03/30/2020",
      message: "the most versatile method that i know of",
      replies: [
        {
          author: "jarambe",
          time: "6:13pm 03/30/2020",
          message: "Yeah it really is!",
        },
        {
          author: "mattata",
          time: "6:42pm 03/30/2020",
          message: "what is your favorite recipe?",
        }
      ],
    },
    {
      title: "Kalita",
      author: "jarambe",
      time: "8:27am 04/01/2020",
      message: "My favorite method now days is the Kalita. Love how consistent it is.",
      replies: [],
    }
  ],
  "v60 vs aeropress": [],
  "what does everyone think of James Hoffman?": [],
};

app.get('/api/GetForumPosts', (req, res) => {
  res.send(data);
});

app.get('/api/GetForumPosts/:topic', (req, res) => {
  let topic = req.params.topic;

  res.send(data[topic]);
});