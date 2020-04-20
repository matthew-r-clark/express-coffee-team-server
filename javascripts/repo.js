const db = require('./db_connection');
const queries = require('./queries');

function handleError(error) {
  console.log('ERROR: ' + error);
}

module.exports = class Repo {
  getTopics(req, res) {
    console.log('getTopics');
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
    console.log('getPostsForTopics');
    let sql = queries.postsForTopic;
    let topic_id = Number(req.params.topic_id);

    db.any(sql, [topic_id])
      .then(data => res.status(200).json(data))
      .catch(handleError);
  }
}

// data = {
//   "General": [],
//   "fav brew method?": [
//     {
//       title: "aeropress",
//       author: "mattata",
//       time: "6:04pm 03/30/2020",
//       message: "the most versatile method that i know of",
//       replies: [
//         {
//           author: "jarambe",
//           time: "6:13pm 03/30/2020",
//           message: "Yeah it really is!",
//         },
//         {
//           author: "mattata",
//           time: "6:42pm 03/30/2020",
//           message: "what is your favorite recipe?",
//         }
//       ],
//     },
//     {
//       title: "Kalita",
//       author: "jarambe",
//       time: "8:27am 04/01/2020",
//       message: "My favorite method now days is the Kalita. Love how consistent it is.",
//       replies: [],
//     }
//   ],
//   "v60 vs aeropress": [],
//   "what does everyone think of James Hoffman?": [],
// };