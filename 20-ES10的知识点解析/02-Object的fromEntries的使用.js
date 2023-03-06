const obj = { 
  name: 'obj',
  age: 18,
  height: 1.88
}

const entries = Object.entries(obj)
console.log(entries);

const newObj = {}
for (item of entries) {
  newObj[item[0]] = item[1]
}
console.log(newObj);


// ES10 新增的 Object.fromEntries 方法 
const newObj2 = Object.fromEntries(entries)
console.log(newObj2);


// Object.fromEntries 应用场景
const queryString = 'name=obj&age=18&height=1.88'
const queryParams = new URLSearchParams(queryString)
console.log(queryParams);
for (item of queryParams) {
  console.log(item);
}
const parmasObj = Object.fromEntries(queryParams)
console.log(parmasObj);