// 从某些角度说， 开发中没有this 很多问题我们也有解决方案
// 但是没有this 会喂我们编写代码变得非常不方便

var obj = {
  name: 'why',
  eating() { 
    console.log(this.name + '在吃东西');
  },
  running() {
    console.log(this.name + '在跑步');

  },
  studying() {
    console.log(this.name + '在学习');
     
  }
}

obj.running()
obj.eating()
obj.studying()