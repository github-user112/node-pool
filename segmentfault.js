
var schedule = require('node-schedule');
var parseSegmentfault = require('./func/parse_segmentfault')
var j = schedule.scheduleJob('* * */23 * * *', parseSegmentfault);
parseSegmentfault()