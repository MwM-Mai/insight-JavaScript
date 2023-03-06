function foo(x, y, ...args) {
  console.log(x, y, args);
  console.log(arguments);
}

foo(12, 20, 30, 40, 50, 20)