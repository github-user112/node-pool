var myPool = require('./createPool')
/**
 * Step 3 - Drain pool during shutdown (optional)
 */
// Only call this once in your application -- at the point you want
// to shutdown and stop using this pool.
function destoryPool (){
  myPool.drain().then(function() {
    myPool.clear();
  });
}
module.exports = destoryPool