class HYError {
  constructor (errerCode, errerMessage) {
    this.errerCode = errerCode
    this.errerMessage = errerMessage
  }
}


function foo(type) {
  console.log('foo函数开始执行~');

  if (type === 0) {
    // 1. 抛出一个字符串类型(基本的数据类型)
    // throw 'type 不能为0'

    // 2. 比较常见的是抛出一个对象类型
    // throw { errorCode: -10010, errorMessage: 'type 不能为0' }

    // 3. 创建一个类 并且创建这个类对应的对象
    // throw new HYError(-1001, 'type 不能为0')

    // 4. JS 提供一个类 Error
    throw new Error('typr 不能为0')

    // 强调: 如果函数中欧你抛出了异常 那么后续的代码都不会继续执行了
  }


  console.log('foo函数结束执行~')
}

foo(0)

console.log('后续的代码继续执行');