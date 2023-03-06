function throttle(fn, interval, options = { leading: false, trailing: false }) {
  // 记录上一次的时间
  let lastTime = 0
  let timer = null

  const { leading, trailing } = options

  // 事件触发时，真正执行的函数
  return function (e) {

    // 获取当前触发的时间
    const nowTime = new Date().getTime()

    // 如果第一次不触发 并且要 lastTime 为0
    if (!leading && !lastTime) lastTime = nowTime

    // 规定时间减去 触发时间减去上一次触发的时间之和 如果小于等于 0 执行回调
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      if (timer) {
        timer = null
      }

      // 执行的回调
      fn.apply(this, [e])
      // 保留上一次触发的时间
      lastTime = nowTime
    } else if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null
        lastTime = !leading ? 0 : new Date().getTime()
        fn.apply(this, [e])
      }, remainTime)
    }
  }
}