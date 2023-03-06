# 1、V8引擎的原理

![](C:\Users\86188\Desktop\深入javascript高阶语法\3fe7995cf9b461156c4a67e3dfb3194.jpg)

# 2、箭头函数和普通函数的区别

###### 1、 this指向问题

​	箭头函数没有this this指向的是上层作用域 箭头函数在被指向之前 this指向就被固定绑定的了

​	无法通过call/apply/bind修改this指向  

###### 2、没有propetype（没有原型）

###### 3、 不能和new一起使用（无法作为构造函数）

###### 4、没有arguments属性

# 3、箭头函数的简写

###### 1、参数是一个的时候 可以去掉（）如 item => {}

###### 2、代码块为一行的时候可以省略 大括号和return 如 item => consloe.log(item)

###### 3、代码块为对象时候用（）进行包裹作为整体 如 () => ({name: 'james', age: 18})

# 4、纯函数

###### 1、此函数在 <u>确定的输入</u> 时， 需要有  <u>确定的输出</u>

###### 2、函数执行过程中，不能产生 <u>副作用</u>

# 5、柯里化

#### 1、只 <u>传递给函数一部分参数来调用它</u>， 让 <u>它返回一个函数去处理剩余的参数</u>

​	**这个过程称之为柯里化

```
例如： 
// 普通函数 
function add(x, y, z) {
  return x + y + z
}

var reslut = add(10, 20, 30)
console.log(reslut);

// 柯里化过程
function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}

var reslut2 = sum(10)(20)(30)
console.log(reslut2);
```

​	**简化后的柯里化**

```
// 简化柯里化代码
var sum2 = x => y => z => x + y + z
console.log(sum2(10)(20)(30));
```

#### 2、 柯里化的作用

###### 	1、柯里化单一职责（每个函数处理的问题尽可能单一）

```
// 普通函数 将一大堆处理过程交给一个函数
function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

console.log(add(10, 20, 30));

// 单一职责原则(每个函数处理的问题尽可能单一)
function sum(x) {
  x = x + 2
  return function (y) {
    y = y * 2
    return function (z) {
      z = z * z
      return x + y + z
    }
  }
}
console.log(sum(10)(20)(30));
```

###### 	2、柯里化逻辑的复用

```
function sum(m, n) {
  return m + n
}

// 假如在程序中，我们经常需要把 5 和 另外一个数字进行相加
// console.log(sum(5, 5));
// console.log(sum(5, 50));
// console.log(sum(5, 10));
// console.log(sum(5, 500));


// 柯里化的逻辑复用 可以使count进行复用
function makeAdder(count) {
  return function (num) {
    return count + num
  }
}

// var reslut = makeAdder(5)(10)
// console.log(reslut);

var adder5 = makeAdder(5)
adder5(10)
adder5(15)
adder5(20)

```

# 7、严格模式

###### 1、 禁止意外创建全局变量

```
message = 'Hello word'

function foo() {
  age = 20
}

foo()
console.log(age)

```

###### 2、不允许函数有相同的参数名称



###### 3、 静默错误

```
true.foo = 'anc' 

message = 'Hello word'
```



###### 4、 不允许使用原先的八进制格式



###### 5、不允许使用with语句

```
var obj = {
  name: 'why',
  age: 'obj age'
}

function foo() {
  function bar() {
    with (obj) {
      console.log(age);
    }
  }
  bar()
}
```

###### 6、eval函数不会向上引用变量

```
var jsString = "var message = 'Hello word';  console.log(message);"
consloe.log(message) // 报错

```

###### 7. 严格模式下的this 默认绑定（独立函数调用）指向undefined

# 8、Object.defineproperty 的注意事项

###### 1、Object.defineproperty 使用存取属性描述符 <u>每次打印修改的属性都会调用set/get方法</u>

```
var obj = {
  name: 'why', 
  age: 18, 
  address: '广东省'
}

let _address = '北京市'

Object.defineProperty(obj, 'address', {
  get() {
    foo()
    // console.log(obj.address); 
    // 打印 obj.address 会默认调用 Object.defineproperty() 的 set/get方法  如果在 get/set 打印会报错 栈溢出
    return _address
  },
  set(newValue) {
    // console.log(newValue);
    // 需要一个媒介 赋值 否者会报错 栈溢出
    console.log('set');
    _address = newValue
  }
})
```

# 9、构造函数

#### 1、 构造函数在new 的过程中做了什么

##### 	1. 在内存中创建一个新的对象

##### 	2. 给对象的原型（prototype）赋值给构造函数的原型对象（prototype）属性

##### 	3. 构造函数的this会指向创建出来的新对象

##### 	4. 开始执行函数体的内部代码

##### 	5.最终会返回创建出来的对象

# 10、面向对象的三大特性

#### 	1、封装

​		将属性和方法封装到一个类(构造函数)中，可以称之为封装的过程(编写类(构造函数)的过程)

```
function Person(name, age, height, addres) {
  
}
Person.prototype.eating = function (){}
```



#### 	2、继承

#### 		    1. 重复利用一些代码（对代码复用）

######          ES6 之前的继承

```
// 继承
function inheritPrototype(SubType, SuperType) {
  // Students.prototype 创建新的对象 对象原型__proto__ 指向 Person.prototype
  SubType.prototype = Object.create(SuperType.prototype)   
  
  // Students.prototype 创建新的对象 没有 constructor 属性
  Object.defineProperty(SubType.prototype, 'constructor', {
    value: SubType,
    writable: true,
    configurable: true,
    enumerable: false
  })
}


function Person(name, age, friends) {
  this.name = name 
  this.age = age
  this.friends = friends
}

  Person.prototype.running = function () {
    console.log(this.name + 'running');
  }

  Person.prototype.eating = function () {
    console.log(this.name + 'eating');
  }

// 调用继承的封装函数
inheritPrototype(Students, Person)

function Students(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.sno = sno
  this.score =score
}

Students.prototype.studying = function () {
  console.log(this.name + 'studying');
}

var stu = new Students('张三', 18, ['james'], 111, '良好')
console.log(stu);
stu.studying()
stu.running()
```

######         ES6的继承

```
// 继承 extends
// **** 在子类的构造函数使用 this或者返回默认对象之前 必须先通过 super关键字 调用父类的构造函数
// **** super关键字的使用位置有三个: 子类的构造器 、 实例方法 、 静态方法

// super 的用法 有两种

// 1. 调用 父对象/父类 的构造函数
// super([arguments])   arguments是类数组对象

// 2. 调用 父对象/父类 上的方法/可以在子类 实例方法里面 调用父类的方法
// super.functionOnParent([arguments])   functionOnParent 为 父类的方法名 比如 super.runnig()

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  running() {
    console.log('running');
  }

  personMethod() {
    console.log('处理逻辑1');
    console.log('处理逻辑2');
    console.log('处理逻辑3');
  }
}

class Student extends Person {
  // JS引擎在解析子类的时候就有要求，如果我们实现继承
  // 那么子类的构造方法中，在使用 this 之前
  constructor (name, age, sno) {

    // super关键字
    super(name, age)

    this.sno = sno
  }

  // 子类对父类方法的重写
  running() {
    console.log('student' + this.name + 'running'); 
  }


  personMethod() {
    // console.log('处理逻辑1');
    // console.log('处理逻辑2');
    // console.log('处理逻辑3');

    // 可以在子类 实例方法里面 调用父类的方法
    super.personMethod()   // 如果 子类重写对父类的方法 打印 处理逻辑 123456 可以减少重复的逻辑代码实现

    console.log('处理逻辑4');
    console.log('处理逻辑5');
    console.log('处理逻辑6');
  }
}

var stu = new Student('why', 18, 111)
console.log(stu);
stu.running()
```



##### 2. 继承是多态的前提





#### 	3、 多态

###### 			当不同数据类型执行同一个操作时，如果表现出来的行为(形态)不一样 那就是多态的体现

# 11、 原型链

![](C:\Users\86188\Desktop\深入javascript高阶语法\a04e1f414c0ad64c59f882e41f88c90.jpg)

# 12、函数-对象-原型的关系

![](C:\Users\86188\Desktop\深入javascript高阶语法\52c66eeee135040fd85e59e6297dda7.jpg )

# 13、Proxy的基本使用

##### 	在ES6中，新增了一个proxy(对象, 捕获器对象 )类， 用于帮助我们创建一个代理(不想对原对象进行操作)

###### 	** <u>捕获器</u>(13种)  如果不进行重写的话 会自动完成对对象的操作 增删改查

###### 	* 也就是说，如果我们希望监听一个对象的相关操作，那么我们可以先创建一个代理对象（proxy）对象

###### 	* 之后对该对象的所有操作，都要通过代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作

```
const obj = {
  name: "why",
  age: 18
}

// Proxy() 两个参数 第一个 对象 第二个 捕获器对象
// 捕获器如果不进行重写的话 会自动完成对对象的操作 增删改查
// 暂时不知道有哪些捕获器对象 先写 {}
const objProxy = new Proxy(obj, {
  //重写捕获器 

  // 获取值时的捕获器 target: 代理的对象  
  get(target, key) {
    console.log('重写了get捕获器');
    return target[key]
  },
  // 设置值时的捕获器
  Set(target, key, newValue) {
    target[key] = newValue
  }
}) 

console.log(objProxy.name);
// console.log(objProxy.age);

// objProxy.name = 'obj'

// console.log(objProxy.name);
```

# 14、 Reflect的作用

##### Reflect也是ES6新增的一个API， 它是一个对象，字面意思就是 反射

##### 作用

######     它主要提供了很多 <u>操作Javascript对象的方法</u> ， 有点像 <u>Object中操作对象的方法</u>

######     比如Reflect.getPrototypeOf(target)类似于Object.getPrototypeOf()

######     比如Reflect。defineProperty(target, propertyKey,attributes)类似于Object,defineproperty()

```
const obj = {
  name: 'why',
  age: 18
}


// Proxy(代理) 构造函数 是不想对原对象进行操作
// set/get 的代码块都是对原对象进行了操作
// 所有结合了 Reflect 使用 避免对原对象进行操作
const objProxy = new Proxy(obj, {
  set(target, key, newValue, receiver) {
    console.log(`set-----------`);
   Reflect.set(target, key, newValue)
  },
  get(target, key, receiver) {
    console.log(`get-----------`);
    return Reflect.get(target, key)   // 通过语言内部 获取 target key
  },
})

objProxy.name = 'obj'
console.log(objProxy.name);
```

# 15、什么是迭代器

##### 	迭代器是帮助我们对某个数据结构(Array、链表、哈希表)遍历的对象

```
// 在 JS 中迭代器也是一个具体对象 这个迭代器需要符合迭代器的协议
// 在 JS 中迭代器的标准有一个特定的 next() 方法

// 以下要求
// next() 方法是一个无参数函数或者一个参数, 返回一个 应当拥有两个属性的 对象
// 1> done属性(boolea)
//    如果迭代器可以产生序列中的下一个值 则为 false
//    如果迭代器迭代完毕 则为 true

// 2> value 迭代器返回的任何一个JS值 done为true时可省略

// 编写的一个迭代器对象
// const iterator = {
//   next() {
//     return { done: true, value: 123 }
//   }
// }


// 数组
const names = ['abc', 'cba', 'nba']

// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
  next() {
    // return { done: false, value: 'abc' }
    // return { done: false, value: 'cba' }
    // return { done: false, value: 'nba' }
    // return { done: true, value: undefined }
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());   // { done: false, value: 'nba' }
console.log(namesIterator.next());   // { done: true, value: undefined }
console.log(namesIterator.next());   // { done: true, value: undefined }
console.log(namesIterator.next());   // { done: true, value: undefined }
console.log(namesIterator.next());
console.log(namesIterator.next());
```

# 16、什么是生成器

##### 	*生成器是ES6新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行

##### 	*生成器函数也是一种函数，但是和普通函数有一些区别

###### 	***首先 生成器函数需要在function的后面加上符号： *

###### 	***其次 生成器函数可以通过 <u>yield</u> 关键字来控制函数的执行流程

###### 	***最后 生成器函数的返回值是一个 Generator(生成器)

​		生成器实际上是一种特殊的迭代器

```
function* foo() {
  console.log('函数执行开始');

  const value1 = 100
  console.log('开始执行第一段代码', value1);
  yield

  const value2 = 100
  console.log('开始执行第二段代码', value1);
  yield

  const value3 = 100
  console.log('开始执行第三段代码', value1);
  yield

  console.log('函数执行结束');
}

// 调用生成器函数时候， 会给我们返回一个 生成器对象 这个生成器对象 是一个特殊的迭代器
const generator = foo()

// 开始执行第一段代码 （第一个yield前面的代码）
generator.next()

// 开始执行第二段代码
generator.next()
```

# 17、事件循环以及宏任务-微任务

![](C:\Users\86188\Desktop\深入javascript高阶语法\b7b2c03ebed60e8ac4bde2056f767db.jpg)

# 18、ES Mudule(模块化) 内部原理 

![](C:\Users\86188\Desktop\深入javascript高阶语法\Snipaste_2022-08-26_23-37-32.png)

![](C:\Users\86188\Desktop\深入javascript高阶语法\Snipaste_2022-08-26_23-42-02.png)