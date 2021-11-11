const db = require("db");

db.connect({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

console.log(client_id);