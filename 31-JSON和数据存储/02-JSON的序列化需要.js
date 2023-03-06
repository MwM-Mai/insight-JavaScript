const obj = {
  name: "why",
  age: 18,
  friends: {
    name: 'kobe',
  },
  hobbies: ['篮球', '足球']
}

// 将obj转成 JSON格式的字符串

const StrObj = JSON.stringify(obj)


// 将对象数据存储 localStorage
localStorage.setItem('obj', StrObj)
console.log(localStorage.getItem('obj'));


// 将JSON格式的字符串转成 obj对象

const jsonString = localStorage.getItem('obj')

console.log(JSON.parse(localStorage.getItem('obj')));

const info = JSON.parse(jsonString)

console.log(info);