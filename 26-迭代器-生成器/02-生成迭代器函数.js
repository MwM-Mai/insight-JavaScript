
// 有限的迭代器
function createArrayIterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

const names = ['abc', 'cba', 'nba']
const nums = [12, 22, 23, 55, 32]


const namesIterator = createArrayIterator(names)
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());


// 创建无限的迭代器  done 永远为 false 时 为无限迭代器 
function createNumberiterator() {
  let index = 0
  return {
    next() {
      return { done: false, value: idnex++ }
    }
  }
}