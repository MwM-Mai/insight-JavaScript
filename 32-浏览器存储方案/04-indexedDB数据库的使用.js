// 打开数据库(和数据库建立连接的) 
const dbRequest = indexedDB.open('why')
dbRequest.onerror = function (err) {
  console.log('打开数据库失败');
}

dbRequest.onsuccess = function (event) {

}



// 获取 btns 监听点击
const btns = document.querySelectorAll('button')
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    switch (i) {
      case 0:
        console.log('点击了新增');
        break
      case 1:
        console.log('点击了查询');
        break
      case 2:
        console.log('点击了删除');
        break
      case 3:
        console.log('点击了修改');
        break
    }
  }
}