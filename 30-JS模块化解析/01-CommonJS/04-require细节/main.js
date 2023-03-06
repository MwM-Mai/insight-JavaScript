// 1. 情况一 核心模块

// const path = require('path')  // 引用的是 node.js 核心模块


// 2. 情况二 路径 ./ ../ /(根目录)

// const abc = require('./abc')   // 当前目录下的文件 先找 js文件 再找jison 没有再找 node 没有 当作文件夹查询

// console.log(abc.name);


// 3. 情况三 不是路径也不是核心模块
const why = require('why')
