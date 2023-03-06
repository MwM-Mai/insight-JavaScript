const obj = {
  name: "obj",
  age: 18,
  height: 1.88
} 

console.log(Object.entries(obj));
const objentries = Object.entries(obj)
objentries.forEach(item => console.log(item))
console.log(Object.entries(['abc', 'cba1', 'nba']));
console.log(Object.entries('abc'));