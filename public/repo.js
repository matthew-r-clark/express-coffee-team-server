const db = require('./db_connection');
const queries = require('./queries');

module.exports = class Repo {
  getTopics(req, res) {
    let sql = queries.topics;
    
    db.any(sql)
      .then(data => {
        res.status(200)
           .json(data);
      }).catch(error => console.log('ERROR: ' + error + '\n' + sql));
  }

  getPostsForTopic(req, res) {
    let sql = queries.postsForTopic;
    let topic = req.params.topic;

    db.any(sql, [topic])
      .then(data => {
        let posts = {};

        data.forEach(post => {
          if (!post.thread_id) {
            post.replies = [];
            posts[post.id] = post;
          } else {
            posts[post.thread_id].replies.push(post);
          }
        });

        res.status(200)
           .json(Object.values(posts));
      }).catch(error => console.log('ERROR: ' + error + '\n' + sql));
  }

  getRepliesForPost(id) {

  }

  select(sql, values=[]) {
    let results;

    db.any(sql, values)
    .then(data => results = data)
    .catch(error => console.log('error: ' + error));

    return results;
  }

  insert(sql, values) {

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