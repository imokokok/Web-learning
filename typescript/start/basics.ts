function add(a: number, b: number, showResult: boolean, phrase: string) {
  // if (typeof a !== "number" || typeof b !== "number") {
  // throw new Error("Incorrect input");
  // }
  const result = a + b;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let n1: number;
n1 = 10;
const n2 = 2.5;
const printResult = true;
let resultPhrase = "Result is:";

const result = add(n1, n2, printResult, resultPhrase);
console.log(result);
