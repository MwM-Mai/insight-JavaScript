// 1. settimeout
setTimeout(() => {
  console.log(this);
}, 2000)

// 2.监听点击
const boxClick = document.querySelector('.box')
boxClick.onclick = function () {
  console.log(this);
}
// boxClick.onclick() 相当于隐式绑定

boxClick.addEventListener('click', function () {
  console.log(this);
})


// 3. 数组 forEach(fn, this指向)/map(平方根)/filter/find
// forEach() 第二个参数是修改this指向的 
var names = ['abc', 'cba', 'nba']
names.forEach(function () {
  console.log(this);
}, 'abc')