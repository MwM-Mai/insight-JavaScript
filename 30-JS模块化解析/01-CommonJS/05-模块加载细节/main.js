console.log('main start');

// 1. 由此看出模块在第一次被加载的时候  模块中的js代码会执行一次
// 2. 模块多次被加载 会缓存 最终只加载一次

require('./foo')
require('./foo')
require('./foo')



console.log('main end');

