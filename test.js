//##Topic: comment and it's type:-

// 1)in_line comment
/* 2)multi_line comment
........
........
this are the two types of comments*/

//##Topic: Data-Type:-
/* There are 7 data types they are:
1)undefined
2)null
3)boolean
4)string
5)symbol
6)number
7)object
*/
//## Declearing Veriables

var myNmae = "pradip"
myName = 8
let ourName = "javascript"
const pi = 3.14
/* The different between them are
var can be used anywere in the its like universal
let only on the field or scope where its used
const is the constant variable where it cannot be 
changed in entire program */

//##Storing values with assignment operator
/* there is the different between clearing the
veriables and assigning the veriables for eg: */
var a; //clearing variable
var b = 2; //assigning variable b with assigning operator i.e =
console.log(a)

a = 7
b = a
console.log(a)
console.log(b)

//##Initializing variables with assignment Operator
var a = 7; 

//##Uninitialized Variables 
/* this three value are the uninitialized variables
var a; 
var b;
var c;
now initilizing it with initializing operators i.e =*/
var a = 2;
var b = 3;
var c = "i an a string";

a = a + 1;
b = b + 5;
c = c + '?';

console.log("a =",a," b =",b," and c denote =",c)

//##Case Sensitivity in Variables
/*it means the capatilization matters for variables*/
var myGoodLuck
var computerScience
var dataScientist
/*if we assign this given uninitilized variables
without caring the uppercase or lower case latter 
it will throw error*/
var MYGOODLUCK
var COMPUTERSCIENCE
var DATASCIENTIST

//##Adding Numbers
var sum = 10 + 10;
console.log(sum)
//##Difference
var difference = 45 - 10;
console.log(difference)
//##Multiplication
 var product = 8 * 10;
 console.log(product)
 //#quotient
 var quotient = 10/5;
 console.log(quotient)
 //#increasemental
 var myVar = 11
 /*myVar = myVar + 1 OR*/
 myVar++
 //#Decreasemental
 var myVar = 12
 /* myVar = myVar - 1 or*/
 myVar--
 //#Decimal number
 var myDecimal = 5.6
 var myDecimal = 0.00076
 //#multiplying decimal
 var product = 2.0 * 2.5
 console.log(product)
 //#remainder operation
 var remainder;
 remainder = 11 % 3;
console.log(remainder)

//##Compound assignment with augmented addition
//#For Addition
var a = 3
var b = 17
var c = 12
/* 
a = a +12;
b = 9 + b;
c = 7 + c;
this code can be modified as */
a += 12;
b += 9;
c += 7;
console.log(a,b,c)
//#For subtraction
var a = 3
var b = 17
var c = 12
/*
a = a - 12;
b = b - 9;
c = c - 7;
this can be modified as */
a -= 12
b -= 19
c -= 17
console.log(a,b,c)
//#Declare String Variables
/*Example*/
var first_name = "pradip";
var last_name = "gadal";
var my_first_name = "pramila";
var my_last_name = "gadal"

//##Escaping Literal Quotes in Strings
/*******
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*******/
var myStr = "firstline\n\t\\new line\n\t\tthird line"
console.log(myStr)

//#Concatenating Strings with Plus Operator
var conCatStr = "i wanna add" +" "+ "two strings.";
console.log(conCatStr)
 
//#Concatenating Strings with Plus Equals Operator
var ourStr = "I cone first. "
ourStr += "I come second."
console.log(ourStr)

//#Constructing Strings with Variables
var MyName = "pradip gadal";
var Title = "my name is " + MyName + "."

var MyInfo = "hello! my name is " + MyName + 
". \n" + "I live in Belbari."
console.log(Title)
console.log(MyInfo)

var Name = "Pradip Gadal";
var info = "my name is ";
info += Name;
console.log(info)

//Find length of string
var first_name = "pradip"
var last_name = "gadal"
var full_name = "";
full_name += first_name
full_name += " "
full_name += last_name
console.log(full_name.length)

//#Bracket Notation to find First Character in String














