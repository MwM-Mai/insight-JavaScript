const obj = {
  name: "why",
  age: 18,
  friends: {
    name: 'kobe',
  },
  hobbies: ['篮球', '足球'],
  // toJSON() {
  //   return '123456789'
  // }
}



// 需求： 将上面的对象转成JSON字符串

// 1. 直接转化
const jsonString1 = JSON.stringify(obj)

console.log(jsonString1);

// 2. stringify 第二个参数(repalcer) .
//  2.1 选择需要转成JSON格式字符串的对象属性(相当于过滤)
const jsonString2 = JSON.stringify(obj, ['name', 'friends'])
console.log(jsonString2);

//  2.2 传入回调函数 (key, value) => { return value }
const jsonString3 = JSON.stringify(obj, (key, value) => {
  if (key === 'age') {
    return value * 2
  }
  return value
})
console.log(jsonString3);

// 3. stringify 第三个参数 space(空间) 缩进 
const jsonString4 = JSON.stringify(obj, null, 2)
console.log(jsonString4);


// 如果obj对象 中由toJSON方法 只要将obj 转成 JSON格式的字符串 使用的是 stringify 方法 都会调用到 obj对象的 toJSON方法