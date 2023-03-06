// 1. 常见的属性
console.log(window.screenX);
console.log(window.screenY);

window.addEventListener('scroll', () => {
  console.log(window.scrollX, window.scrollY);
})

console.log(window.outerWidth);   // 窗口宽度
console.log(window.outerHeight);



// 2. 常见方法