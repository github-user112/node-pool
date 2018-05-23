const Sequelize = require('sequelize')
const sequelize = require('../init_sql')
const jd = sequelize.define('jd', {
  name: {
    type: Sequelize.STRING
  },
  sku:{
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  sales:{
    type:Sequelize.STRING
  }
});
jd.sync()
module.exports = jd
