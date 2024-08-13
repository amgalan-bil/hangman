// 1.Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 
let itCompanies=["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let space="";

console.log(itCompanies.length)

for (let i = 0; i < itCompanies.length; i +=3) {
  space+=itCompanies[i];
  space+=", "
}
console.log(space)

let zai= ""

for (let i = 0; i < itCompanies.length; i++) {
  zai+=itCompanies[i]
  zai+=", "
}
let capital = zai.toUpperCase()
let lower = zai.toLocaleLowerCase()
console.log(zai)
console.log(capital)
console.log(lower)

// 2.Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.

console.log(itCompanies.slice(3))
console.log(itCompanies.slice(0,4))

// Эхний мэдээллийн технологийн компанийг array - аас хас

const remove = itCompanies.pop()
console.log(itCompanies)

// Сүүлийн мэдээллийн технологийн компанийг array - аас хас
const shift = itCompanies.shift()
console.log(itCompanies)
// 3.Array дотор гараас орсон үг хэдэн ширхэг орсныг тоолдог код бичнэ үү.
// Шаардлага: том жижиг үсэг ялгахгүй тоолдог байх (JavaScript String match() судлаарай)

let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'Нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];
let counter =0; 

for (let i = 0; i < data.length; i++) {
    if(data[i].match(`үүрс`)){
        counter++;
    }
}
console.log(`The word нүүрс appears ${counter} times`)

// Input: нүүрс
// Output: нүүрс гэдэг үг 2 орсон байна.


// 4. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11
let arrayOfNumbers= [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]

let sum= 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum+=arrayOfNumbers[i];
    
}
console.log(sum);

let max= arrayOfNumbers[0]
for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > max) {
        max= arrayOfNumbers[i]
    }
    
}
console.log(max)


for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i]< max) {
        max= arrayOfNumbers[i]
    }
    
}

console.log(max)

const numb = arrayOfNumbers.unshift(15);
console.log(arrayOfNumbers)

const too = arrayOfNumbers.push(200);
console.log(arrayOfNumbers)
 
// 5.Ижилхэн урттай массив(array) өгөхөд харилцан үржүүлж хариуг массив(array)-д буцаа .
// Input:
let arr1 = [3, 45, 23, 78, 34]
let arr2 = [4, 2, 34, 12, 1]
let answer=" ";

for (let i = 0; i < arr1.length; i++) {
    answer+= (arr1[i] * arr2[i]);
    answer+= ", "
}

console.log(answer)
 
// 6. array values : 5 6 4 12 19 121 1 7 9 63 

let arr =[5, 6, 4, 12, 19, 121, 1, 7, 9, 63 ];
let evenNumber = [];
let oddNumber= [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2=== 0){
        evenNumber.push(arr[i])
    }else{
        oddNumber.push(arr[i])
    }
}

console.log(`The amount of odd numbers in this array is ${oddNumber.length} and the amount of even numbers in this array is ${evenNumber.length}`)
// 7.Array-н давхардсан утгуудыг array-т буцаадаг код бичээрэй .
let repeat = [4, 2, 34, 4, 1, 12, 1, 4];
let gazar= [];

for (let i = 0; i < repeat.length; i++) {
    for (let j = i+1; j < repeat.length; j++) {
        if (repeat[i]=== repeat[j] ) {
            if (!gazar.includes(repeat[i])) {
                gazar.push(repeat[i])
            }
    }
    
}
}
console.log(gazar)
