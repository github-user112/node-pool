const puppeteer = require('puppeteer')
var Pool = require('../Pool/pool');
module.exports = async function parse () {
  const browser = await puppeteer.launch({slowMo: 250})
  const page = await browser.newPage()
  await page.goto('https://segmentfault.com/news/frontend')
  await page.waitFor(2000)
  var SfFeArticleList = await page.evaluate(() => {
    var list = [...document.querySelectorAll('.news-list .news__item-title a')]
    return list.map(el => {
      return {href: el.href.trim(), title: el.innerText}
    })
  })
  SfFeArticleList.forEach((el) => {
    Pool.sql(`INSERT INTO segmentfault VALUES ('${el.href}', '${el.title}','${new Date()}')`, [], function(err, result){
      if (err) {
        console.log(err)
      }
      // console.log('等待中' + Pool.myPool.pending)
      // console.log('链接池中-----------' + Pool.myPool.borrowed)
    })
  })
  // console.dir(SfFeArticleList)
  // await page.screenshot({path: './sf.png', type: 'png'});
  await browser.close()
}