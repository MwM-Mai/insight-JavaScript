
const name = 'why'
const age = 18

const foo = 'foo value'


// 默认导出的方式一
export {
  name,
  age,
  // foo as default
}


// 默认导出的方式二
export default foo


// 默认导出只能有一个