let myPool = require('./createPool')
let destoryPool = require('./destoryPool')
/**
 * Step 2 - Use pool in your code to acquire/release resources
 */
let Pool = {}
Pool.myPool = myPool
Pool.sql = function(sql,arg,callback){
  // acquire connection - Promise is resolved
// once a resource becomes available
  const resourcePromise = myPool.acquire();

  resourcePromise
    .then(function(client) {
      client.query(sql, [], function(error, results) {
        // return object back to pool
        myPool.release(client);
        callback(error,results)
      });
    })
    .catch(function(err) {
      // handle error - this is generally a timeout or maxWaitingClients
      // error
    });
}
Pool.destory = destoryPool
module.exports = Pool

