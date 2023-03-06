var obj = {
  naem: 'why',
  age: 18,
  height: 1.88,
  data: {
    name: 'james',
    age: 18,
    height: 2.08
  }
}

var { name, age, height } = obj
console.log(age);

var {  age, name, height } = obj
console.log(age);

var { data: newdata } = obj
console.log(newdata);

// 默认值
var {address = '广州市'} = obj
console.log(address);

function foo({height, age}) {
  console.log(height, age);
}

foo(obj)