'use strict';
//在JavaScript中，类的继承可以通过多种方法实现，包括类与构造函数之间的继承，以及两个构造函数之间的继承

// 构造函数
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

// 类
class Employee {
  constructor(name, jobTitle) {
    Person.call(this, name); // 调用构造函数来初始化属性
    this.jobTitle = jobTitle;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle}.`);
  }
}

// 设置原型链继承
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // 修复constructor属性

// 创建实例
const employee = new Employee('Imok', 'Developer');
employee.sayHello(); // 输出：Hello, my name is Imok and I am a Developer.
