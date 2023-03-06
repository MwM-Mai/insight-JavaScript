// 获取某一个环境下的全局对象(Global Object)

// 在浏览器下
// console.log(window);
// console.log(this);

// 在node 下
// console.log(global);

// ES11后不需要判断 window 是否 为undefined 来获取全局对象
// globalThis
console.log(globalThis);