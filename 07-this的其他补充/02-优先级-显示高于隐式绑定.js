var obj = {
  name: 'obj',
  foo() {
    console.log(this);
  }
}
 
obj.foo()

// 1.call/apply显示绑定高于隐式绑定
obj.foo.call("abc")
obj.foo.apply("abc")


// 2. bind > 隐式绑定
var fn = obj.foo.bind("nba")
fn()


// 3. 更明显的比较
function foo() {
  console.log(this);
}

var obj = { 
  name: 'james',
  foo: foo.bind("foo")
}

obj.foo()