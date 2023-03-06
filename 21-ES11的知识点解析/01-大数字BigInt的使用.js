// ES11 之前 最大的 Int 类型 Number.MAX_SAFE_INTEGER
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);   // 9007199254740991 大于这个数字就不安全了
console.log(maxInt + 1);
console.log(maxInt + 2);


// ES11之后: BigInt
const bigInt = 900719925474099100n   // n不能省略
console.log(bigInt);
// console.log(bigInt + 10);   // 报错 因为这里不存在隐式转换 10 为小的整数类型  bigINt 为大数字类型 如果需要相加 那么 10后面需要加上 n
console.log(bigInt + 10n);

const num = 1 
console.log(bigInt + BigInt(num));