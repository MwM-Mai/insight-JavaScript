// 数组

const names = ['abc', 'cba', 'nba']
console.log(names[Symbol.iterator]);



// Map/Set

const set = new Set()
set.add(10)
set.add(100)
set.add(1010)
console.log(set[Symbol.iterator]);



// 函数中的 arguments
function foo(x, y, z) {
  console.log(arguments[Symbol.iterator]);
  for (const item of arguments) {
    console.log(item);
  }
}

foo(1, 2, 3)