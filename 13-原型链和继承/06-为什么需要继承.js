// Teacher
function Teacher(name, age, title) {
  this.name = name
  this.age = age
  this.title = title
}


Teacher.prototype.running = function() {
  console.log(this.name + 'running');
}

Teacher.prototype.eating = function () {
  console.log(this.name + 'eating');
}

Teacher.prototype.teaching = function () {
  console.log(this.name + 'teaching');
}



// Student
function Student(name, age, sno) {
  this.name = name
  this.age = age 
  this.sno = sno
}

Student.prototype.running = function() {
  console.log(this.name + 'running');
}

Student.prototype.eating = function () {
  console.log(this.name + 'eating');
}

Student.prototype.studying = function () {
  console.log(this.name + 'studying');
}




// Teacher 和 Student 存在很多公共部分的代码 可以创建一个父类(父构造函数) 存储一些公共的代码 子类(子构造函数) 比如 Student/Teacher 用到公共代码 继承父类的就可以了
