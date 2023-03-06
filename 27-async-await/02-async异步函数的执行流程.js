async function foo() {
  console.log('start');
  await console.log('await');
  console.log('end');
}

foo()

console.log('111');