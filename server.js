const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(express.static('javascripts'));
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

const Repo = require('./javascripts/repo.js');
let db = new Repo();

// GetForumPosts
app.get('/api/GetForumPosts/topics', db.getTopics);
app.get('/api/GetForumPosts/topics/:id', db.getTopicById);
app.get('/api/GetForumPosts/posts/:topic_id', db.getPostsForTopic);
