'use strict';

//学习scope chain并深入理解

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
 console.log(age);
 printAge();*/

//1.scope chain是函数定义时确定的而不是函数调用时
//2.嵌套函数的调用基于嵌套关系形成的scope chain
//多思考scope chain在代码运行是的逻辑，拓展探讨更多衍生机制
//理解作用域链对于编写清晰、可维护的JavaScript代码至关重要，特别是在处理复杂函数调用和闭包时。
