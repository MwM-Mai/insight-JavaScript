// WeakSet 和 Set(强引用) 的区别

// 1. WeakSet 只能存放对象类型 不能存放基本数据类型
// 2. WeakSet 对元素的引用是弱引用 如果没有其他引用对某个对象进行引用, 那么GC可以对该对象进行回收
// 3. WeakSet 不能遍历



// 强引用和弱引用的概念

// 强引用: 比如在 var obj = {} 那么 {} 的obj对象指向内存地址 这个指向 称之为强引用 GC 会根据强引用 判断是否需要回收
// 弱引用: 弱引用是否存在并不影响GC的垃圾回收

const weakSet = new WeakSet()

// 区别一
// weakSet.add(10)   报错
// weakSet.add({})
// console.log(weakSet);


// 区别二 对对象是弱引用
let obj = {
  name: 'why',
  age: 18
}

weakSet.add(obj)
console.log(weakSet);

// WeakSet 的应用场景
class Person{
  running() {
    console.log('running', this);
  }
}

const p = new Person()
p.running()

p.running.call({name: 'why'})

