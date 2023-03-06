// function log(date, type, message) {
//   console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
// }

// console.log(new Date(), 'DEBUG', '查找轮播图的bug');
// console.log(new Date(), 'DEBUG', '查找菜单的bug');
// console.log(new Date(), 'DEBUG', '查找数据的bug');

// console.log(new Date().getHours() + ':' + new Date().getMinutes());


// 柯里化优化
function log(date) {
  var h = date.getHours() 
  var m = date.getMinutes()
  return function (type) {
    return function (message) {
      return `[${h}:${m}][${type}][${message}]`
    }
  }
}

var fn = log(new Date())('DEBUG')
console.log(fn('查找轮播图的bug'));