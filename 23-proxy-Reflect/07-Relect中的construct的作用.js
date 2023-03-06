function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher(name, age) {
  this.name = name
  this.age = age
}

const stu = new Student('张三', 12)
console.log(stu.__proto__ === Student.prototype);
const tea = new Teacher('why', 20)


// 执行Student函数中的内容， 但是创建出来的对象是Teacher对象
const teacher = Reflect.construct(Student, ['why', 20], Teacher)
console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype);
