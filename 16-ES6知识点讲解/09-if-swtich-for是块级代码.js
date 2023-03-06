
// if 语句的代码 就是 块级作用域
if (true) {
  var height = 1.88
  let age = 1888
}

console.log(height);
// console.log(age);

var color = 'red'



// swtich 语句的代码 也是 块级作用域
switch (color) {
  case 'red':
    var foo = 'foo'
    let bar = 'bar' 
    break;

  default:
    break;
}

console.log(foo);
// console.log(bar);


// for语句的代码 也是 块级作用域

for (let i = 0; i < 5; i++) {
  var add = 'add'
  let fn = 'fn'
}

// console.log(i);
console.log(add);
// console.log(fn);