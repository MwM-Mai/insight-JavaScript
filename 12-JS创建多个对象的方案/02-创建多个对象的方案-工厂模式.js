// 工厂模式: 工厂函数
function createPerson(name, age, height, address) {
  var p = {
    name,
    age,
    height,
    address,
    eating() {
      console.log(this.name + '在吃东西~');
    },
    running() {
      console.log(this.name + '在跑步~');
    }
  }


  return p
}



var p1 = createPerson('张三', 18, 1.88, '广州市')
var p2 = createPerson('李四', 20, 1.98, '北京市')
var p3 = createPerson('王五', 23, 1.78, '上海市')

console.log(p1.name);
p2.eating()



// 工厂模式的缺点(获取不到对象最真实的类型)
// 比如再创建createDog() {}工厂模式  createPreson 和 createDog 都是 Object类型 分类不够具体
// 我们希望不管是 p1 p2 p3 在拿到的时候 还想要知道他对应的 类型
console.log(p1, p2, p3);