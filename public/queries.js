const fs = require('fs');

module.exports = {
  topics: fs.readFileSync('./queries/topics.sql', 'utf8'),
  postsForTopic: fs.readFileSync('./queries/postsForTopic.sql', 'utf8')
}