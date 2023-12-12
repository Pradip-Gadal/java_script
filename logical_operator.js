/* There are four logical operators in JS:
|| (OR), &&(AND), !(NOT), ??(Nullish Coalescing) */

/* Athough they are called 'logical', they can applied to value of 
 of any type, not only boolean. Their result can also be of any type.*/
// Precidence of AND is higher then OR
// || (OR) operator

/* Possiable logical combinations of OR operators */

/* console.log(false || true)
console.log(true || false)
console.log(true || true)
console.log(false || false) */

// Thus OR finds the first truth value and return it.

/* if(1 || 0){
    console.log('true')     // 1 is treated as true and 0 as false.
} */

/* const isWeakend = false
let date = 15;

(date > 0 || date < 7) && isWeakend 
? console.log('yes') : console.log('No') */

/* let result;
let input = 20;

(input > 10 || input < 15) 
? result = true : result = false;
console.log(result) */

// OR || finds the first truthy value
/* The logical described above is somewhat classical.
Now let's bring extra feature. */


let value1 = '';
let value2 = '';
let value3 = 'JS'

let result = value1 || value2 || value3
console.log(result)  // ==> 'JS'
/* The OR operator does the following
1) Evaluates operands from left to right
2) For each operands it convert to boolean
if the result is true it stop and return the original value of the operand
3) if all the operand is evaluated(i.e all were false), the last operand is returned. */

// Getting the first truthy value form a list of variables or expressions.

/* let firstName = '', lastName = '';
let nickName = 'JavaScript'

console.log(firstName || lastName || nickName || 'React')
 */

// short-circuit evaluation

true || console.log('true') //==> no result.

// IF first argument is true then we dont get second argument.

false || console.log('ture') //==> true.

// if first argument is false then we get second argument.

// && (AND)

/* In classical programming AND returns true if all
the operands are true else false. */

console.log(true && false)  // false
console.log(false && true)  //false
console.log(true && true)   //true
console.log(false && false) //false

let hour = 12, minute = 30;
(hour == 12 && minute == 30) && console.log('12 : 30'); 
// '12: 30'

(hour == 9 && minute == 30) || console.log('12 : 30'); 

/* check first argument if true then check second argument and return it,
but if first is false then instantly return it.
for OR operator 
if first argument is true it will return instantly without checking second argument
else it will return the last one .*/

/* code written above is not good practice to replace if. better to write if as given  */
if(hour == 12 && minute == 30) console.log('12:30')

// !(NOT)
// syntax result = !value.

/* 
The operator accepts a single argument and does the following:
1. Converts the operand to boolean type: true / false
2. Returns the inverse value.
*/

console.log(!true)  // ==> false
console.log(!0)     // ==> true

// Double !! is to convert any value in boolean type:

console.log(!!'not-empty string');   // true
console.log(!!null);                 // flase
// Also.

console.log(Boolean('not-empty string'))    //true
console.log(Boolean(null))                  // false.


if(-1|| 0) console.log('first')
if(-1 && 0) console.log('second')
if(null || -1 && 1) console.log('third')
