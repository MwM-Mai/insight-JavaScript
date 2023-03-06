function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}



function deepClone(originValue) {
  // 判断传入的值 是否是对象
  if (!isObject(originValue)) return originValue
  const newObj = {}
  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key])
  }

  return newObj

}

const obj = {
  name: 'why',
  age: 18,
  friend: {
    name: 'james',
    address: {
      city: '克利夫兰'
    }
  }
}

const newObj = deepClone(obj)
console.log(newObj === obj);
obj.friend.address = '阿克伦'
console.log(newObj);