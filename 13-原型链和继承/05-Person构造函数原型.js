function Person() {

}

console.log(Person.prototype);

console.log(Object.getOwnPropertyDescriptors(Person.prototype));

console.log(Person.prototype.__proto__);    // 指向的是顶层原型