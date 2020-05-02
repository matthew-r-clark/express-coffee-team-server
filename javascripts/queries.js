const fs = require('fs');

module.exports = {
  topics: fs.readFileSync('./queries/topics.sql', 'utf8'),
  topicById: fs.readFileSync('./queries/topicById.sql', 'utf8'),
  postsForTopic: fs.readFileSync('./queries/postsForTopic.sql', 'utf8'),
  search: fs.readFileSync('./queries/search.sql', 'utf8')
}