// # loop an array with original property.

Array.prototype.extraProperty = 'pradip'

const myArray = [1,2,3,4,5];

/* 
for(const item in myArray){
    console.log(item)
}       // exrtra property will also printed. 
*/

for(const item in myArray){
    if(myArray.hasOwnProperty(item))console.log(item)
}

const a = 5 + '6';
console.log(typeof(a))

