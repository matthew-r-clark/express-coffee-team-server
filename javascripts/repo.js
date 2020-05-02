const db = require('./db_connection');
const queries = require('./queries');

function handleError(error) {
  console.log('ERROR: ' + error);
}

module.exports = class Repo {
  getTopics(req, res) {
    let sql = queries.topics;
    
    db.any(sql)
      .then(data => res.status(200).json(data))
      .catch(handleError);
  }

  getTopicById(req, res) {
    let sql = queries.topicById;
    let topic_id = Number(req.params.id);

    db.one(sql, [topic_id])
      .then(data => res.status(200).json(data))
      .catch(handleError);
  }

  getPostsForTopic(req, res) {
    let sql = queries.postsForTopic;
    let topic_id = Number(req.params.topic_id);

    db.any(sql, [topic_id])
      .then(data => res.status(200).json(data))
      .catch(handleError);
  }

  getTopicsWithPhrase(req, res) {
    let sql = queries.search;
    let phrase = req.params.phrase;

    db.any(sql, [`%${phrase}%`])
      .then(data => res.status(200).json(data))
      .catch(handleError);
  }
}