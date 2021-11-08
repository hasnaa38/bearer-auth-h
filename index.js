'use strict';

require('dotenv').config();
const { db } = require('./src/auth/models/index.js');

// Start up DB Server
db.sync().then(() => {
  // Start the web server
  require('./src/server.js').startup(process.env.PORT);
}).catch(console.error);