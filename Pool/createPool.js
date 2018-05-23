const genericPool = require("generic-pool");
// const DbDriver = require("some-db-driver");
var mysql = require('mysql');

/**
 * Step 1 - Create pool using a factory object
 */
const factory = {
  create: function() {
    // return DbDriver.createClient();
    return mysql.createConnection({
      host     : '123.206.56.48',
      user     : 'remote',
      password : 'remote',
      database : 'weixin'
    });
  },
  destroy: function(client) {
    client.end();
  }
};

const opts = {
  max: 30, // maximum size of the pool
  min: 2, // minimum size of the pool
  idleTimeoutMillis: 3,
  log:true,
};

const myPool = genericPool.createPool(factory, opts);

module.exports = myPool