// 原型式继承 结合 工厂函数 => 寄生式继承

var personObj = {
  running() {
    console.log('running');
  }
}


// 工厂函数 弊端： 没有明确的类型
function createStudents(name) {
  var stu = Object.create(personObj)  // 原型式继承
  stu.name = name 
  stu.studying = function () {
    console.log('studying');
  }
  return stu
}

var stuObj = createStudents('why')
var stuObj = createStudents('james')
var stuObj = createStudents('kobe')