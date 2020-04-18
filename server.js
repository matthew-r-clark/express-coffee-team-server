const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.set('views', './views');
app.use(express.static('public'));
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

const Repo = require('./public/repo.js');
let db = new Repo();

// ROUTES
app.get('/api/GetForumPosts/topics', db.getTopics);
app.get('/api/GetForumPosts/topics/:id', db.getTopicById);
app.get('/api/GetForumPosts/posts/:topic_id', db.getPostsForTopic);