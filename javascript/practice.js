// 1. 
let number = 12;
let boolean = true;
let string = "hello";
let type = null

console.log(typeof string)
console.log(typeof boolean)
console.log(typeof number)
console.log(typeof num)
console.log(typeof type)

// 2
let tal1 = prompt("enter the first side")
let tal2 = prompt("enter the second side")
let tal3 = prompt("enter the third side")

console.log(tal1, tal2, tal3)
const answer = Number(tal1) + Number(tal2) + Number(tal3)
alert(`the perimeter is ${answer}`)

// 3
let celsius = prompt("please enter the temperature")
let fahrenheit = (9 / 5) * celsius + 32

alert(`the temperature you entered trying to convert celsius into fahrenheit is ${fahrenheit}`)

// 4
let cm = prompt("CM TO INCHES: PLEASE ENTER A Number");
let inches = cm / 2.54
alert(inches)

// 5

let name = prompt("Please enter your name")
let nas = prompt("Please enter your age")

alert(`hello my name is ${name} /n I'm ${nas} years old`)

console.log(`hello my name is ${name}`)
console.log(`I am ${nas} years old`)

//6

let word = "amgalan"
let word2 = "World"


if (word.length > word2.length) {
    alert(`The word ${word} is longer than the word ${word2}`)
} else if (word.length < word2.length) {
    alert(`The word ${word2} is longer than the word ${word1}`)
} else {
    alert(`The words ${word} and ${word2} are equal`)
}


// 7

let phone = prompt("99001234");

if (phone.includes("99")) {
    alert("it is a unitel number")
} else if (phone.includes("98")) {
    alert("it is a mobicom number")
} else if (phone.includes("97")) {
    alert("this is a G-Mobile number")
} else if (phone.includes("94")) {
    alert("It is a SKYTELL number")
} else {
    alert("false number")
}

// 8

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 9

for (let i = 15; i >= 3; i--) {
    console.log(i)
}


// 10

let price = prompt("Enter the cost of your dinner");

if (5000 <= price <= 30000) {
    alert(`The cost of the dinner after taxes is ${price * 1.15}`)
} else {
    alert(`The cost of the dinner after taxes is ${price * 1.2}`)
}


//1



let n = 3;

let o = ""


for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
        if ((i % 2 === 0 && j % 2 === 1) || (j % 2 === 0 && i % 2 === 1)) {
            o += '_'

        } else {
            o += '#'
        }

    }
    o += '\n';
}


console.log(o)



//2

let row = 10
let str = ''

for (let i = 0; i < row; i++) {

for (let g = 0; g < 10 - i; g++) {
    str += " "
    
}
    for (let g = 0; g < 2*i - 1 ; g++) {
        str += "*"
    }
    str+='\n'
}

console.log(str)


// let c = 3;

// for (let i = 0; i < c; i++) {
//     let o = ""
//     for (let g = 0; g < c; g++) {

//         o += "*"

//     }
//     console.log(o)
// }

// ----*
// ---***
// --*****
// -*******
// *********

//3


function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  console.log(fib(19)%5)

  let studentAges=[10,20,15,19,18,19,19]
  let sum=0;
    
  for (let i = 0; i <= studentAges.length - 1; i++) {
    sum+=studentAges[i]
  }

  let average = sum/studentAges.length
  console.log(average)



  let userBalance=[1000, 2000, 2500, 4000000, 13054, 323425]
  let line= ""

  for (let i = 0; i < userBalance.length; i++) {
    line+=userBalance[i]*1.15
    line+=", "
  }

  console.log(line)

