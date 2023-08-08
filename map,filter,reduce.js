const arr = [5, 1, 3, 2, 6]

// const double = (x) => x*2; 
// const triple = (x) => x*3;

// const output = arr.map(triple)
// const binary = arr.map( x => x.toString(2))
// console.log(output);
// console.log(binary);

// const isOdd = (x) => x % 2;
// const isEven = (x) => x % 2 == 0;
// const greaterThen = (x) => x >= 4;
// const smallerThen = (x) => x <= 4;

// const output = arr.filter(smallerThen);
// console.log(output);

// const sumAll = (arr) => {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         sum = sum + arr[i];
//     };
//     return(sum);
// };

// console.log(sumAll(arr))

// const findMAX = (x) => {
//     max = 0;
//     for(let i=0; i < x.length; i++){
//         if(x[i] > max){
//             max = x[i];
//         }
//     }
//     return max;
// }

// console.log(findMAX(arr));

// const output = arr.reduce((acc, curr)=>{
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc;
// }, 0);

// console.log(output);

// const fullName = users.map((x) => `${x.firstName} ${x.lastName}`);
// console.log(fullName)

const users = [
    {
        firstName : "akshay",
        lastName:"kumar",
        age: 26
    },
    {
        firstName : "Pradip",
        lastName:"Gadal",
        age: 26
    },
    {
        firstName : "Pramila",
        lastName:"Gadal",
        age: 21
    }   
]

//  const Count = users.reduce((acc, curr)=>{
//     let i = 0;
//     if (acc[curr.age] == curr.age){
//         i = i + 1;
//     }
//     return `${acc.age} : ${i}`;
//  }, {}) 

//  console.log(Count);

// const Count = users.reduce((acc, curr) => {
//     if(acc[curr.age]){
//         acc[curr.age] += 1;
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

// console.log(Count);

// const fName = users.filter((x) => x.age < 25).map(x=> x.firstName)

// console.log(fName)

// const output = users.reduce((acc, curr)=> {
//     if(curr.age < 30){
//         acc.push(curr.firstName)
//     }
//     return acc;
// }, [])

// console.log(output);

const sentence = "This is my first sentence which is defined as a string";

const word = "sentence"

console.log(sentence.includes(word));

