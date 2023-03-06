const obj = {
  name: "why",
  age: 18,
  friends: {
    name: 'kobe',
  },
  hobbies: ['篮球', '足球']
}

// 将 obj 对象的内容放到info变量中
// 1. 引用赋值
const info = obj
obj.age = 100
console.log(info.age);


// 2. 浅拷贝
const info2 = { ...obj }
obj.age = 1000
console.log(info2.age);

// 会修改
obj.friends.name = 'james'
console.log(info2.friends.name);


// 3. 深拷贝 stringify 和 parse 实现
const JSONString = JSON.stringify(obj)
const info3 = JSON.parse(JSONString)

obj.friends.name = 'ccury'
console.log(info3.friends.name);