/* 
1.1 STATEMENTS:
==> Statements are syntax constructors and comments that perferms actions.
*/

// Statements are seperated by using semicolons
console.log('Hello'); console.log('Hi') 

// Statements are basically written on separate line to make code readable.
console.log('Hello');
console.log('Hi'); 

// In most case, a newline implies a semicolons but doesn't means always.
// where as JS interprats a line break as "implicit" semicolon.
console.log('hello')
console.log('hi')

// There are case where a new lines doesn't means semicolons.
console.log(3+
    1
    + 2);  // ==> 6

// if line ends with '+' then it works as intended beacuse it act as a incomplet expression. so, simicolons will not iplicit.

// But there are suitions where JS really falls to ensure semicolons where it is really needed.

let message = 'Hello'
[1,2].forEach(message) 
// Thus JS treat [] as a single statement simillarly to +

/* 
COMMENTS:
Online comments: ctrl + /
Multipleline Comments:  alt + shift + a 
*/
