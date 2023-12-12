
// Remove duplicates:
/* 
function removeDuplicate(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(newArr.includes(arr[i]))continue;
        newArr.push(arr[i])
    }

    return newArr;
}

console.log(removeDuplicate([1,2,3])) 
*/

// #Even Number:
function onlyEven(arr){
    let even = []
    for(const item of arr){
        if(item % 2 == 0) continue;
        even.push(item)
    }
    return even;
}

let data = [1,2,3,4,5,6,7,8]
console.log(onlyEven(data))


// #remove from words:
const firsName = 'pradip';
let arr = firsName.split('');
arr.splice(0,1)
//array.splice(index, howmany, item1, ....., itemX)
let newName = arr.join('')
console.log(newName)

// #remove from array:
function removeDuplicate(arr, element){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == element) arr.splice(i,1)
        //array.splice(index, howmany, item1, ....., itemX)
    }
    return arr;
}
let array = [1,2,3,4,5,2,3,4,2,3,2,1]
console.log(removeDuplicate(array, 2))

// #demonstrate async loop: ?
/* 
for(let i=0; i<15; i++){
    setTimeout(()=> console.log(i), 5000)
}
 */


// #Power of a number:
function numPower(num, pow){
    let total = 1;
    for(let i=0; i<pow; i++){
        total *= num;
    }
    return total;
}

console.log(numPower(5,3))

// # Print Pattern:

function printPattern(line){
    for(let i=1; i<=line; i++){
        let firstLoop = ''
        for(let j=1; j<=i; j++){
            firstLoop += ' ' + j
        }
        console.log(firstLoop)
    }
}

printPattern(8)


// #No. of Digits in a number:

function countDigit(digit){
    let count = 0;
    for(let i = 0; ; i++){
        if(digit/(10**i) < 1 )break;
        count++
    }
    return count
}

function digitCount(num) {
    var count=0; //return 1 for pow=0
    while(num!=0){
      num=Math.floor(num/10);
      count++;
    }
    return count;
  }
  console.log(digitCount(Number('01')));
  
  let num = Number('01')
  console.log(num)


// #sum of digit in number:

function digitSum(num){
    let total = 0;
    let count = 0;
    while(num!=0){
        total += num%10;
        num = Math.floor(num/10);
        count++
    };
    return {total, count}
};

console.log(digitSum(78910))

// #largest number:

let numbers = [1,2,3,444,565465,64545,6534523,324342,432423]
let largest = numbers[0];
for(let i=0; i<numbers.length; i++){
    largest = numbers[0] > numbers[i] ? largest : numbers[i];
}
console.log(largest)


// # no. of 0 in 2D matrix:

function countNum(num, matrix){
    let count = 0;
    for(const items of matrix){
        for(const item of items){
            if(item == num)count++;
        };
    };
    return count;
};

const matrix2D = [[1,0,1],[2,0,1],[0,0]];

console.log(countNum(0,matrix2D))

// #Product of two array:

function arrayProduct(arr1, arr2){
    let newArray = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(i==j)newArray.push(arr1[i]*arr2[j]);
        };
    };
    return newArray;
};

const list1 = [1,2,3,4,5]
const list2 = [4,3,2,1]
console.log(arrayProduct(list1, list2))

function findProd(arr1, arr2){
    let arrMultiple = arr1.length > arr2.length ? arr1 : arr2;
    for(let i=0; i<arrMultiple.length; i++){
        arrMultiple[i] = arr1[i] * arr2[i];
        if(isNaN(arrMultiple[i]))arrMultiple[i] = 0;
    }
    return arrMultiple;
};

const list12 = [1,2,3,4,5]
const list22 = [4,3,2,1]
console.log(findProd(list12, list22))

let arr111 = [1,2,3,4,NaN];
for(let i=0; i<arr111.length; i++){
    if(isNaN(arr111[i]))arr111[i] = 0;
}
console.log(arr111)


let i = 0;
while(i < 20){
    i++
    if(i==13)continue;
    console.log(i)
};


