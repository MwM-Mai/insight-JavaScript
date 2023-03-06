//  eval 是一个特殊的函数 它可以将传入的字符串当作JavaScript代码进行运行

var message = "Hello word";
console.log(message);

var jsString = "var message = 'Hello word';  console.log(message);"

eval(jsString)