'use strict';

const { users } = require('../models/index.js')
const base64 = require('base-64');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next('Unauthorized User'); };
  
  let basic = req.headers.authorization.split(' ')[1];
  let [username, pass] = base64.decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(username, pass);
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}
