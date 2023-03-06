// 1. ES6之前 对象属性名(key)
const obj = {
  name: 'why',

}



// 2. ES6中 Symbol 的使用 为了防止属性名(冲突) 生成独一无二的属性名
// Symbol 函数 每次调用都会生成 唯一的值

const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2);

// ES2019(ES10) 中 Symbol 还有一个描述(descrition 描述的意思)
const s3 = Symbol('aaa')
console.log(s3.description);

// 3. Symbol 值作为 key

// 3.1 写法一 在定义对象字面量时候使用
const info= {
  [s1]: 'aaa',
  [s2]: 'nnn',
  'aaa': '456'
}

// console.log(info['aaa']);

// 3.2 写法二 新增属性
info[s3] = 'nba'

// 3.3 写法三 Object.defineProperty
const s4 = Symbol()
Object.defineProperty(info, s4, {
  writable: true,
  value: '123',
  enumerable: true,
  configurable: true
})


console.log(info[s1], info[s2], info[s3]);

// 注意： 不能通过 . 语法获取


// 4. 使用Symbol 作为 key 的属性名, 在 遍历/Object.keys等 的时候是 获取不到的
console.log(Object.keys(info));
console.log(Object.getOwnPropertyNames(info));

// 只能通过 Object.getOwnPropertySymbols 方法获取 所以 Symbol 
console.log(Object.getOwnPropertySymbols(info));

const skeys = Object.getOwnPropertySymbols(info)
for (const sKey of skeys) {
  console.log(info[sKey]);
}


// 5. 如果想在 某些情况下 想要 Symbol 值相等
// Symbol.for(key) 方法
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')

console.log(sa === sb);

const key = Symbol.keyFor(sa)
console.log(key);
const sc = Symbol.for(key)
console.log(sa === sc);

