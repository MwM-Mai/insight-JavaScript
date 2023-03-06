console.log('script start');

setTimeout(() => {
  console.log('setTimeout start');
}, 1000)

queueMicrotask(() => {
  console.log('microtask');
})

const promise = new Promise()
promise.then(() => {
  console.log('promise start');
})

console.log('script end');