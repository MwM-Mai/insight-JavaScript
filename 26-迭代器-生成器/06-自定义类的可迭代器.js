// class Person {

// }

// const p1 = new Person()
// const p2 = new Person()
// const p3 = new Person()

// for (let item of p1) {
//   console.log(item);
// }

// 报错 p1 is not iterable

// 案例 创建一个教室类 创建出来的对象都是可迭代对象 
class Classroom {
  constructor (address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

const classroom = new Classroom('3幢5楼200', '计算机教室', ['james', 'kobe', 'ccury', 'why'])
classroom.entry('lilei')

for (const i of classroom) {
  console.log(i);
}