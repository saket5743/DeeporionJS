// Q1) Write a code to find the length of the array and pop out the last digit.
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

arr.pop()
console.log('aaa', arr)

// Q2) Write a function createHelloWorld.It should return a new function that always returns "Hello World".
function createHelloWorld() {
  return function () {
    return 'Hello World'
  }
}

const helloWorld = createHelloWorld()
console.log(helloWorld())

// Q3) Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function counter(n) {
  return function () {
    return n++
  }
}

const couter = counter(5)
console.log(couter())
console.log(couter())

// Q4) aabbbccd   ===> 2a3b2c1d

let str = "aabbbccd";
let result = "";
let count = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++
  } else {
    result = result + count + str[i];
    count = 1
  }
}

console.log(result)

// Q5) Write a JavaScript function to check whether an `input` is an array or not.

const isthisarray = function (input) {
  if (toString.call(input) === "[object Array]") {
    return true;
  }
  else {
    return false
  }
}

// console.log(isthisarray([1, 22, 333]))

// Q6) Write a JavaScript program to find the most frequent item in an array.
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let newarr = [...new Set(arr1)];
console.log(newarr);


// Q7) 
const name1 = { name: "Saket" }
const name2 = { name: "Saket" }
console.log(JSON.stringify(name1) === name2)

// Q8) 
const name3 = [firstname = "Saket"]
const name4 = [firstname = "Saket"]
console.log(name3 === name4)

// Q9)
const one = []
const two = []
console.log(one === two)