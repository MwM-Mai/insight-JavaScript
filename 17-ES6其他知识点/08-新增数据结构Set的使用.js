// 1. 创建Set结构

const set = new Set()

set.add(10)
set.add(20)
set.add(30)
set.add(40)
set.add({})
set.add({})

console.log(set);

const arr = [1, 2, 3, 4, 5, 6, 4]

;


// 对数组去重
let newArr = []
for (const item of arr) {
  if (newArr.indexOf(item) !== -1) {
    newArr.push(item)
  }
}

const arr1 = [...new Set(arr)]
console.log(arr1)

// Set 属性
// size 属性 返回对应的Set里面数据的个数的
console.log(set.size);


// Set 方法

// .add 添加方法

// .delete 删除方法

// .has 判断是否包含该元素
console.log(set.has(10));

// .clear()  清除 清除所有元素


// .forEach/for (of) 遍历
set.forEach(item => {
  console.log(item);
})