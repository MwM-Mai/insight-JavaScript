var names = ['abc', 'cba', 'nba', 'dna']

// 纯函数

// slice 只要给他传入 start/end, 那么对于同一个数组来说，他会给我们返回一个确定的值
// slice 对于函数本身不会修改原数组

// slice 函数本身就是一个纯函数(start/end 确定的输入  newNames 确实输出)
// var newNames = names.slice(0, 3)
// console.log(newNames);



// 非纯函数 

// splice在执行时，有修改掉调用的数组本身，对数组截取， 修改的这个操作就是产生的副作用
// splice不是一个纯函数
var newNames2 = names.splice(2)
console.log(newNames2);
console.log(names);