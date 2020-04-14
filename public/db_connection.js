const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('= Connected to database:', cp.database);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('= Disconnecting from database:', cp.database);
 }
};

const pgp = require('pg-promise')(initOptions);
const config = 'postgres://matt:9raptors@localhost:5432/coffeeteam_forum';
const db = pgp(config);

module.exports = db;