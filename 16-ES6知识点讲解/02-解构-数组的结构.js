var arr = [1, 2, 3, 4]


// 数组解构赋值
var [a, b, ...c] = arr

console.log(c);

// 解构后面的元素

var [, d, ...e] = arr
console.log(d);

// 解构的默认值
var [f, g = 'aaa'] = [1]

console.log(g);
