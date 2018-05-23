let Pool =require('./Pool/pool')
 // Pool.destory()
let i =0
let j = 0
while (i<10000){
  i++
  console.dir(Pool.myPool.size)
  Pool.sql('select * from user_messages where message=2',[],function(err,result){
    if (err){
      console.log(err)
    }
     j++
     console.log(j)
    // console.log(new Date().getTime())
    // console.dir(result)
    console.log('等待中'+Pool.myPool.pending)
    console.log('链接池中-----------'+Pool.myPool.borrowed)
  })
}
