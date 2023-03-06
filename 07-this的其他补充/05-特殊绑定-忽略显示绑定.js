function foo() { 
  console.log(this);
}

foo.call('abc')
foo.apply({})

// call/apply/bind 当传入的是 null/undefined时 会自动将this绑定成window
foo.call(null)
foo.apply(undefined)

var bar = foo.bind(null)
bar()