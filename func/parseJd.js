const puppeteer = require('puppeteer');
var Jd = require('../sequelize/modal/jd_list');
// var Pool = require('../Pool/pool');
async function parseJd () {
  const browser = await puppeteer.launch({slowMo: 250})
  const page = await browser.newPage()
  await page.goto('http://list.jd.com/list.html?cat=9987,653,655')
  await page.waitFor(2000)
  var SfFeArticleList = await page.evaluate(() => {
    var list = [...document.querySelectorAll('.gl-item')]
    return list.map(el => {
      console.dir(el)
      return {
        price: el.querySelector('.J_price i').innerText,
        name: el.querySelector('.promo-words').innerText,
        sales: el.querySelector('.comment').innerText
      }
    })
  })
  console.dir(SfFeArticleList)
  Jd.bulkCreate(SfFeArticleList).then((option)=>{
    console.dir(option)
  })
  // SfFeArticleList.forEach((el) => {
  //   Pool.sql(`INSERT INTO segmentfault VALUES ('${el.href}', '${el.title}','${new Date()}')`, [], function(err, result){
  //     if (err) {
  //       console.log(err)
  //     }
  //     // console.log('等待中' + Pool.myPool.pending)
  //     // console.log('链接池中-----------' + Pool.myPool.borrowed)
  //   })
  // })
  // console.dir(SfFeArticleList)
  // await page.screenshot({path: './sf.png', type: 'png'});
  await browser.close()
}
module.exports = parseJd