// THe 'while' loop:
/* 
syntax:
while (condition) {
    //code
    // so-called 'loop body'
} 

*/

/* 
let numbers = []
let i = 0;
while(i < numbers.length){
    console.log(`${i}: ${numbers[i]}`);
    i++;
}
 */

/* 
function iterateArray(arr){
    console.log('iteratable Functions')
    let i = 0;
    while(i < arr.length){
        console.log(`${i}: ${arr[i]}`);
        i++;
    }
}
 */

/* function doWhileLoop(arr){
    console.log('do while loop...')
    let i = 0;
    do{
        console.log(`${i}: ${arr[i]}`);
        i++;
    }while(i < arr.length)
}


function valueCatcher(...values){
    let array = [];
    for(let value of values){
        array.push(value)
    }
    return array;
}

let array = valueCatcher(1,2,3,4)
doWhileLoop(array)
 */


/* 
1) Write a program to keep asking for a number until you enter a negative number.
 At the end, print the sum of all entered numbers.


function isNegative(){
    let input = +prompt('enter a number: ')
    let total = 0;
    while(input > 0){
        total += input;
        input = +prompt('enter a number: ')
    }
    return total;
}

console.log(isNegative())

*/

/* 
2) Write a program to ask for a name until the user enters END.
 Print the name each time. When you are done, print "I am done."

 function isEnd(){
    let input = prompt('enter the name');
    let arrays = []
    while(input !== 'END'){
        console.log(input)
        array.push(input)
        input = prompt('enter the name')
    }
    return(arrays)
 }

 */

 /* 
 
 function averageGrade(){
    let grade = +prompt('enter your grade:')
    total = 0;
    let grades = []
    while(grade > 0){
        total += grade
        grades.push(grade)
        grade = +prompt('enter your grade:')
    }
    result = total / grades.length
    return result;
 }

 function printGrade(args){
    let arg = args.toFixed(2);
    arg < 0 ? console.log(`grade: ${arg} falied`)
    : arg < 2 ? console.log(`grade: ${arg} C`)
    : arg < 3 ? console.log(`grade: ${arg} B`)
    : arg < 4 ? console.log(`grade: ${arg} A`)
    : console.log(`grade is not valid: ${arg}`);
 }

 printGrade(averageGrade())

 */

/*  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

 let totalSticks = 7;
 let user = +prompt('who wanna go first')
 while(totalSticks > 0){
    let user = +prompt('enter the number')
    if(user == '' || 'pass'){
        let computer = randomIntFromInterval(1,3)
        totalSticks -= computer;
        alert(`computer: ${computer} total : ${totalSticks}`)
      }
    if(user > 3){
        console.log('sorry not allowed.')
    }else{
        totalSticks -= user;
        alert(`total: ${totalSticks}`)
    }
 } */


 // for loop: 
 /*
 SYNTEX:
 for (being; condition; step) {
    ....loop body....
 }   
 being: let i = 0 -Executes once upon entering the loop;
 condition: i < 5 - checked before every loop iteration;
 body: Runs again and again while the condition is truthy;
 step: i++ Executes after the body on each iteration;

 */


/*  for(let i = 0; i < 5; i++){
    console.log(i)
 }
 */


/* 
let array = ['apple', 'mango', 'coffee', 'coco'];
for(let i = 0; i < array.length; i++){
    console.log(array[i])
};
*/

/* 
let array = [2,4,5,6,7,5,4,3,322,2,3,4,5,6,6,43];
let j = 0;
for(let i = 0; i<array.length; i++){
    if(array[i] == 6){
        j++
        console.log(`${array[i]} total: ${j}`)
    }
    console.log(array[i])
} 
*/

/*
 for(let i = 0; i <= 10; i++){
    for(let j=0; j<=10; j++){
        console.log(`(${i},${j})`)
    }
    console.log(i)
} 
*/

/* 
for(let i=1; i<=10; i++){
    console.log(`\nTable of ${i} \n`)
    for(let j=0; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
} 
*/

// KEYWORDS: break and continue:
/* 
let array = []
for(let i=1; i<=10; i++){

    if(i == 5) {
        console.log(i + ' is detected')
        break;
    }
    array.push(i)    
}
console.log(array)
 */
/* 
function skipNumInArray(num){
    let array = [];
    for(let i=0; i<num.length; i++){
        if(num[i] == 'mango')continue;
        array.push(num[i])
    }
    return array;
}

let fruits = ['apple', 'mango', 'orange', 'banana']
console.log(skipNumInArray(fruits))
 */

/* 
outer:for(let i=0; i<10; i++){
    console.log(i)
} */


