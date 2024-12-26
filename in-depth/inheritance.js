'use strict';
//在JavaScript中，类的继承可以通过多种方法实现，包括类与构造函数之间的继承，以及两个构造函数之间的继承

//在构造函数中继承
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.sayName = function() {
  console.log('Name:', this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 调用父类的构造函数
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype); // 设置原型链
Child.prototype.constructor = Child; // 修复构造函数指向

Child.prototype.sayAge = function() {
  console.log('Age:', this.age);
};

const child = new Child('Imok', 20);
child.sayName(); // Name: Imok
child.sayAge(); // Age: 20

//在类中继承
class Parent {
  constructor(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
  }

  sayName() {
    console.log('Name:', this.name);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类的构造函数
    this.age = age;
  }

  sayAge() {
    console.log('Age:', this.age);
  }
}

const child = new Child('Imok', 20);
child.sayName(); // Name: Imok
child.sayAge(); // Age: 20
