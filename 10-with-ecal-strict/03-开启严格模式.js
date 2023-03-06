// 严格模式 两种方法开启
// 1. 在js文件头部 写 'sue strict';
// 'sue strict';

// 静默错误 本来报错 但是没有开启严格模式会忽略掉
true.foo = 'anc' 

message = 'Hello word'

// 2. 给某个函数开启严格模式

function foo() {
  'use strict';
}