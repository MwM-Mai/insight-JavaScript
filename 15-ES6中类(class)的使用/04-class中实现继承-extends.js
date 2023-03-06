// 继承 extends
// **** 在子类的构造函数使用 this或者返回默认对象之前 必须先通过 super关键字 调用父类的构造函数
// **** super关键字的使用位置有三个: 子类的构造器 、 实例方法 、 静态方法

// super 的用法 有两种

// 1. 调用 父对象/父类 的构造函数
// super([arguments])   arguments是类数组对象

// 2. 调用 父对象/父类 上的方法/可以在子类 实例方法里面 调用父类的方法
// super.functionOnParent([arguments])   functionOnParent 为 父类的方法名 比如 super.runnig()

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  running() {
    console.log('running');
  }

  personMethod() {
    console.log('处理逻辑1');
    console.log('处理逻辑2');
    console.log('处理逻辑3');
  }

  // 静态方法
  static personStaticMethod() {
    console.log('personStaticMethod');
  }
}

class Student extends Person {
  // JS引擎在解析子类的时候就有要求，如果我们实现继承
  // 那么子类的构造方法中，在使用 this 之前
  constructor (name, age, sno) {

    // super关键字
    super(name, age)

    this.sno = sno
  }

  // 子类对父类方法的重写
  running() {
    console.log('student' + this.name + 'running'); 
    console.log('-----');
  }


  studentMethod() {
    // console.log('处理逻辑1');
    // console.log('处理逻辑2');
    // console.log('处理逻辑3');

    // 可以在子类 实例方法里面 调用父类的方法
    super.personMethod()   // 如果 子类重写对父类的方法 打印 处理逻辑 123456 可以减少重复的逻辑代码实现

    console.log('处理逻辑4');
    console.log('处理逻辑5');
    console.log('处理逻辑6');
    console.log('-------------');
  }


  // 重写静态方法    静态方法是放在类里面的(构造函数里面 跟constructor一个位置)
  static studentStaticMethod() {
    super.personStaticMethod()

    console.log('-------');
    console.log('studentStaticMethod');
  }
}

var stu = new Student('why', 18, 111)
console.log(stu);
stu.running()
stu.studentMethod()
Student.studentStaticMethod()