// 迭代器 
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

const names = [1223, 53443, 5454, 4123]
const namesIterator = createArrayIterator(names)

// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());


// 生成器替代迭代器
function* createArrayGenerator(arr) {
  let index = 0
  // 第一种写法
  // for (let i of arr) {
  //   yield i
  // }

  // 第二种写法 yield* + 可迭代对象
  yield* arr
}

// const namesGenerator = createArrayGenerator(names)
// console.log(namesGenerator.next());
// console.log(namesGenerator.next());
// console.log(namesGenerator.next());
// console.log(namesGenerator.next());
// console.log(namesGenerator.next());


// 案例二 创建一个函数 这个函数可以迭代一个范围内的数字
function* createRangeIterator(start, end) {
  let index = start
  while (index++ < end) {
    yield index
  }
}

// const rangeIterator = createRangeIterator(10, 20)
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());


// 案例三 创建一个教室类 创建出来的对象都是可迭代对象 
class Classroom {
  constructor (address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  // [Symbol.iterator] = function* () {
  //   yield* this.students
  // }

  *[Symbol.iterator]() {
    yield* this.students
  }
}

const classroom = new Classroom('3幢5楼200', '计算机教室', ['james', 'kobe', 'ccury', 'why'])
classroom.entry('lilei')

for (const i of classroom) {
  console.log(i);
}