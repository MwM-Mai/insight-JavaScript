const info = { 
  name: 'james',
  age: 39,
  friend: {
    name: 'boke',
    age: 41
  }
}

const obj = {...info}
console.log(obj);

obj.friend.name = 'pink'
console.log(info);
console.log(obj);