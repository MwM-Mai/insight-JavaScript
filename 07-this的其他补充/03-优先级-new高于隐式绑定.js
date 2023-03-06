var obj = {
  name: 'obj',
  foo: function() {
    console.log(this);
  }
}

// new 优先级高于隐式绑定
var fn = new obj.foo()
