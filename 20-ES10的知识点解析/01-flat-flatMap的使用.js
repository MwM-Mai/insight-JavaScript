// flat(降维的次数)方法 降维 

const nums = [10, 20, ['abc', 'cba', 'nba'], [50], [[1, 20, 60], [18, 22]]]
console.log(nums.flat());
console.log(nums.flat(2));

// flatMap(callback, this)
const nums2 = [10, 20, 30] 
const newNums2 = nums2.flatMap(item => {
  return item * 2
})

console.log(newNums2);



// flatMap 的应用场景

const message = ['hello wrold', '你好啊 james', 'my name is coderwhy']
const wrolds = message.flatMap(item => {
  return item.split(' ')
})
console.log(wrolds);