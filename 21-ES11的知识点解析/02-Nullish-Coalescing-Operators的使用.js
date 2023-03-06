// ES11 空值合并运算  ??(运算符)


let foo = 0
const bar = foo || 'default value'   // 有弊端 当 foo 为 0/"" 时 返回的是字符串
const bar2 = foo ?? 'default value'


console.log(bar);
console.log(bar2);
