class HYEventBus {
  constructor () {
    this.eventBus = {}
  }

  // 监听
  on(eventName, eventCallback, thisArgs) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArgs
    })
  }

  // 取消监听
  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const index = handlers.indexOf(newHandlers[i])
      if (newHandlers[i].eventCallback === eventCallback) {
        handlers.splice(index, 1)
      }
    }

  }

  // 发射事件
  emit(eventName, ...playload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArgs, playload)
    });
  }
}

const eventBus = new HYEventBus()


// main.js

// 监听事件

const handleCallback = function (playload) {
  console.log('监听abc1', this);
}

eventBus.on('abc', handleCallback, { name: 'why' })

eventBus.on('abc', function (playload) {
  console.log('监听abc2', this);

}, { name: 'why' })


// utils.js

// 发射事件
eventBus.emit('abc', 123)



// 移除
eventBus.off('abc', handleCallback)

eventBus.emit('abc', 123)
// console.log(eventBus.eventBus);

