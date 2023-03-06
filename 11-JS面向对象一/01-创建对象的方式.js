// 创建对象， 对某个人进行抽象(描述)

// 早期创建对象方式
// 创建方式 1 
var obj = new Object()
obj.name = 'why'
obj.age = 18
obj.height = 1.88
obj.running = function () {
  console.log('this.name' + '在跑步~');
}


// 创建方式 2
var info = {
  name: 'james',
  age: 39,
  height: 2.11,
  eating() {
    console.log(this.name + '在吃东西~');
  }
}

info.eating()