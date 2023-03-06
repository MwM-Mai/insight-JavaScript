class Person {

}

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log('running');
    }
  }

  return NewClass
}

// 在JS 中类只能有一个父类， 单继承
class Student extends Person {

}

var NewStudent = mixinRunner(Student)

var ns = new NewStudent() 

ns.running()

