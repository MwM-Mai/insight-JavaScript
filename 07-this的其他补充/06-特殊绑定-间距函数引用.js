var obj = {
  name: 'why',
  foo() {
    console.log(this);
  }
}

var obj2 = {
  name: 'james',
};

// obj2.bar = obj.foo
// obj2.bar()

// 立即执行函数如果存在赋值表达式 会将obj.foo 的结果作为 obj2.bar = obj.foo 再执行
// 属于独立函数调用 this => window
   
(obj2.bar = obj.foo)()

