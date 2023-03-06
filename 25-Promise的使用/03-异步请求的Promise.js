
function requestData(url) {
  // 异步请求代码会放到executor中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求结果
      // url 传入的coderwhy， 请求成功
      if (url === 'coderWhy') {
        // 成功
        let names = ['abc', 'cba', 'nba']
        resolve(names)
      } else {
        // 失败
        let err = '请求失败, url错误'
        reject(err)
      }
      // 否者请求失败
      return
    }, 3000)
  })
}


const promise = requestData('coderWhy')
promise.then((res) => {
  console.log('请求成功:' + res);
}, (err) => {
  console.log('请求失败:' + err);
})
