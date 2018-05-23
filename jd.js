
var schedule = require('node-schedule');
var parseJd = require('./func/parseJd')
var j = schedule.scheduleJob('* * */23 * * *', parseJd);
parseJd()