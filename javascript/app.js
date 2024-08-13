let arr = [1, 2, 4, 5, 7, 9, 13, 17, 20];
let a = arr.length;
let guess = 9;
  
  function findNumb(arr, a, guess){
    let left = 0; 
    let right = a - 1;
    while (left < right) {
      if (Math.abs(arr[left] - guess) <= Math.abs(arr[right] - guess)) {
        right--;
      } else {
        left++;
      }
    }
    return arr[left];
  };
   


  console.log(findNumb(arr, a, guess));