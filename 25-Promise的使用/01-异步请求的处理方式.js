/**
 *  这种回调方式有很多弊端
 * 1> 如果是我们自己封装的 requestData ，那么我们在封装的时候必须要自己设置好callback名称，并且使用好
 * 2> 如果我们使用的是别人封装的， 或者第三方库， 那么我们必须要看别人的源码或者文档， 才能自动它这个函数需要怎么去获取结果
 * 
 */


function requestData(url, succassCallback, failtureCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求结果
    // url 传入的coderwhy， 请求成功
    if (url === 'coderWhy') {
      // 成功
      let names = ['abc', 'cba', 'nba']
      succassCallback(names)
    } else {
      // 失败
      let err = '请求失败, url错误'
      failtureCallback(err)
    }
  },3000)
}



requestData('coderWhy', (res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})