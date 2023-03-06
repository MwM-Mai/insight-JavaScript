// 1. ||= 逻辑或赋值运算

let message = undefined
// message = message || 'default value'  等于下面代码
message ||= 'default value'
console.log(message);


// 2. &&= 逻辑与赋值运算
// &&
const obj = {
  name: "why",
  foo() {
    console.log('foo函数被调用');
  }
}
// obj && obj.foo && obj.foo()

// &&=
let info = {
  name: 'info'
}
// 判断 info 是否有值
// info 有值的情况下 info.name 赋值给 info
info = info && info.name   // 等于下面的代码

// info &&= info.name
console.log(info);


// 3. ??= 逻辑空赋值运算
let value = 0
value ??= 'default value'
console.log(value);
