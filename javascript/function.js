// Declare a function  and it print out your full name. (Бүтэн нэрийг чинь хэвлэдэг функц бичнэ үү . Example : Purevsuren Oyunsuren ) 
function fullName(first) {
    alert(`Hello ${first}`)
}

let input = prompt(`Please enter your Full Name`)

fullName(input);
// Declare a function  and now it takes firstName, lastName as a parameter and it returns your full - name. (Бүтэн нэрийг чинь хэвлэдэг функц бичнэ үү . Одоо гаднаас овог , нэр авна. ) 
function fullName(first, last) {
    alert(`Hello ${first} ${last}`)
}

let print = prompt(`Please enter your first Name`)
let enter = prompt(`Please enter your Last Name`)

fullName(input, enter);
// Declare a function  and it takes two parameters and it returns sum.(Гаднаас 2 утга буюу параметр авч нийлбэрийг нь буцаадаг функц бичнэ үү .) 
function sum(x, y) {
    console.log(x + y)
}

sum(10, 7)
// Гаднаас 2 тоо авч , авсан тоонуудын хоорондох тэгш тоонуудын array буцаадаг функц бич. (example : returnEvenNumbers(1 , 7) - [ 2 , 4 , 6 ])
function returnEvenNumbers(a, b) {
    let evenNumber = [];
    for (let i = a + 1; i < b; i++) {
        if (i % 2 == 0) {
            evenNumber.push(i)
        }

    }
    return (evenNumber)
}
console.log(returnEvenNumbers(1, 19))
// Гаднаас 2 тоо авч , авсан тоонуудын хоорондох сондгой тоонуудын array буцаадаг функц бич. (example : returnEvenNumbers(1 , 7) - [ 3, 5 ])
function returnOddNumbers(a, b) {
    let oddNumber = [];
    for (let i = a + 1; i < b; i++) {
        if (i % 2 == 1) {
            oddNumber.push(i)
        }

    }
    return (oddNumber)
}
console.log(returnOddNumbers(1, 19))
// Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана. (array өөрсдөө үүсгээрэй , гаднаас өгөх тоог prompt-оор авна)

const num = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let index = -1;
let guess;

function check() {
    guess = prompt(`Please enter a random number and we will give the corresponding index if it has one.`)
    guess = Number(guess)

    if (num.includes(guess)) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] === (guess)) {
                index = i
                alert(index)
            }

        }
    } else {
        alert(-1)
    }
}

console.log(check())
// Өгөгдсөн array - н дунджийг олоод буцаадаг функц бич.(array өөрсдөө үүсгээрэй )
const array = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

function findCenter(array) {
    let ans = [];
    let b = array.length;

    if (b % 2 === 0) {
        ans.push(array[b / 2 - 1])
        ans.push(array[b / 2])
    } else {
        ans.push(array[Math.floor(b / 2)])
    }
    return ans
}
let middle = findCenter(array);
console.log("Middle Element is:", middle.join(" "))
// Өгөгдсөн string-н бүх үсгийг том үсэг болгох функц бич. (string өөрсдөө зохиогоорой )


function bigLetter() {
    let str = "pinecone"
    let string = str.toUpperCase()
    console.log(string)
}

bigLetter()
// Өгөгдсөн string-н бүх үсгийг жижиг үсэг болгох функц бич. (string өөрсдөө зохиогоорой )

function smallLetter() {
    let str = "PINECONE"
    let string = str.toLowerCase()
    console.log(string)
}

smallLetter()
//  arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20] багаас нь их рүү эрэмбэлээд буцаадаг функц бичээрэй .

arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
let box = [];

function sort() {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[0]
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j] 
            }
        }
        arr.splice(arr.indexOf(min), 1)
        box.push(min)
        i--
    }

    console.log(box)
}

sort()