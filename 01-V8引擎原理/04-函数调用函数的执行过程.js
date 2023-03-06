var message = 'Hello Global'

function foo() {
   console.log(message);
}

function bar() {
  var message = 'Hello Bar'
  foo()
}

bar()


// AO(bar函数)

var ActivationObject = {
  message: undefined
}

// AO(foo函数)

var ActivationObject = {

}




// var golbalObject = {
//   window: golbalObject,
//   setTimeout: '函数',
//   String: '类',
//   message: undefined,
//   foo: 0xa00,
//   bar: 0xb00
// }