// 多态： 当不同的数据类型执行同一个操作时，如果表现出来的形态(行为)不一样 ，那么就是多态的体现


function calcArea(foo) {
  console.log(foo.getArea);
}

var obj1 = {
  name: 'why',
  getArea() {
    return 100
  }

}


class Person {
  getArea() {
    return 1000
  }
}

var p = new Person()

calcArea(obj1)
caleArea(p)