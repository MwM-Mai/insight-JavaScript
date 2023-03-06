function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: 'awesome'
}

// forEach() 方法第二个参数是this的指向
// [1, 2, 3].forEach(foo, obj)  // 这样写会报错 必须再obj对象后面加上 ';' 否者会将 obj对象和[1, 2, 3]看作一个整体

// 或者如下

var nums = [1, 2, 3]

nums.forEach(foo, obj)

