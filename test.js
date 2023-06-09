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
const lastName = 'gadal'
const indexingLastName = lastName[0]
console.log(indexingLastName)


const firstName = 'pradip'
const firstLetterOfFirstName = firstName.slice(2,4);
console.log(firstLetterOfFirstName) 

//##String Immutability
var string = "jello world"
/*String are immutable
err: string[0] = 'H';
*/
string = "hello world"
console.log(string)

//## Bracket Notation to find last Character in string
const FirstName = 'Pradip'
var LastLetterOfFirstName = FirstName[FirstName.length-1]
console.log(LastLetterOfFirstName)

var sclicingTrick = FirstName.slice(2,FirstName.length)
console.log(sclicingTrick)

firstname = 'Pradip'
console.log(`firstname = ${firstname}`)

//##word_blank
function wordBlanks(Noun, Adjective, Verb, Adverb)
var result = ""
result = `The ${Adjective} ${Noun}`

//## Store Multiple Values with Arrays
var ourArray = ["john", 23]
console.log(ourArray[1])

//## Nested Arrays or Multidimensional Array
var myArray = [["the universe", 22], ["everything", 10]];
console.log(`Access Multidimensional array: ${myArray[0][0]}`)

console.log(`${myArray[1][0]}`);

const ourArray = [[1,2,3],[4,5,6],[[1,4,8],9,0,4]];
console.log(`ourArrayIndex=${ourArray[2][0]}`);
console.log(ourArray[0][0]);

//# Multiplate Arrays with push()
var ourArray = ["pradip", "gadal", "job"]
ourArray.push(["hapy"])
console.log(ourArray)

var myArray = [["apple", 12],["country, 19"]]
myArray.push(["cat", 3])
console.log(myArray)
console.log(`puss diff\nmyarray:${myArray}\nourArray:${ourArray}`)

//##Manipulate Arrays with pop()
var ourArray = ["hello", 23]
ourArray.pop()
console.log(ourArray)

var myArray = [["apple", 12],["country, 19"]]
myArray.pop()
console.log(myArray)

//## Manuplate Array with shift()

var ourArray = ["hello", 23]
console.log(ourArray.shift())
console.log(ourArray)

var myArray = [["apple", 12],["country, 19"]]
console.log(myArray.shift())
console.log(myArray)

//## Muniplate Arrays with unshift()

var myArray = ["pradip", "is", "Happy"]
myArray.shift()
myArray.unshift("pramila")
console.log(myArray)

var myArray = [["apple", 12],["country, 19"]]
myArray.shift()
myArray.unshift(["ball",3])
console.log(myArray)

//## Shoping List
var myList = [["cereal", 3], ["milk", 2], ["banana", 24],
["egg", 24],["potato", 2]]

//##Write Reusable Code with Functions
function ourReusableFunction() {
    console.log("hello! world");
}
ourReusableFunction();

function reuseableFunction() {
    console.log("how are you?");
}

reuseableFunction();

//##Passing Values to Functions with Arguments

function OurFunctionWithArgs(a,b) {
    console.log(a + b);
}

OurFunctionWithArgs(10, 5);

function MyFunctionWithArgs(a,b) {
    console.log(`my name is ${a} ${b}`);
}
MyFunctionWithArgs("pradip", "gadal");

//##Global Scope and Functions

var Globalvar = 10;

function decleareAnotherVar() {
    withoutVar = 5;
}

function TryGlobalVar() {
    output = "";
    if (typeof Globalvar != "undefined"){
        output += `GlobalVar = ${Globalvar}\n\t`; 
    }

    if (typeof withoutVar != "undefined") {
        output += `withVar = ${withoutVar}`;
    }
    console.log(output)
}

decleareAnotherVar();
TryGlobalVar();

//# Local Scope and Function
function localScope() {
    var myValue = "infinite";
    console.log(`my value is ${myValue}.`)
}

localScope();

/* console.log(myValue) outside the function 
will give error output beacuse it is local
scope */

 //# Global vs. Local scope in Functions
 /* It's possiable to have local variable and
 global variable with same name but Global 
 veriable will take over outside the function*/

 var outWare = "T-Shirt";

 function myOutfit() {
    var outWare = "Sweater";

    return outWare;
 }

 console.log(`${myOutfit()} is local variable`)
 console.log(`${outWare} is Global veriable`)

 //# Return a Value from Return

 function minusSeven(num) {
    return num - 7;
 }

 console.log(minusSeven(10))

 function timesFive(num) {
    return num * 5;
 }

 console.log(timesFive(10))

 //# Understanding Undefined Value Returned from a Function
 
 var sum = 0
 function sumThere() {
    sum += 3;
 }

 sumThere()

 var sum = 0
 function sumFive() {
    sum += 5;
    return sum;
 }
 console.log(sumFive())

 //## Assignment with a Returned Value

 var charged = 0;

 function change(num) {
    return (num + 5)/3;
 }

 charged = change(10)
 console.log(charged)

 var processed = 0
 function process(num) {
    return (num+10)/3
 }
 processed = process(5)
 console.log(processed)

 var total = 0;
 function charged(num) {
    return (num+12)
 }
 total = charged(6)
 console.log(total)

 //#Stand in Line

 function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift()
 }

 var testArr = [1,2,3,4,5]
 console.log(`Before: ${JSON.stringify(testArr)}`)
 console.log(nextInLine(testArr, 6))
 console.log(`After: ${JSON.stringify(testArr)}`)

 arr = [1,2,3,4,5]
 function PushShift(contain, item) {
    contain.push(item)
    return contain.shift()
 }

 console.log(`Before: ${JSON.stringify(arr)}`)
 console.log(PushShift(arr, 6))
 console.log(`After: ${JSON.stringify(arr)}`)


 var Name = ["Ishita", "Ishak", "Pradip"];
function LimitLength(init, item) {
    init.push(item)
    return init.shift()
}

 console.log(`Initial: ${JSON.stringify(Name)}`)
 console.log(LimitLength(Name,"Pramila"))
 console.log(`Final: ${JSON.stringify(Name)}`)

 //# Boolean Value:
 function welcomeToBooleans() {
    return true;
 }

 //# Use Conditional Logic with If Statements:
  
function trueOrFalse(value) {
    if (value) {
        return "the value is true";
    }
    return "the value is false";
}

console.log(trueOrFalse(1))

function TestInput(value){
    if (value) {
        return `input is ${value}`;
    }
    return "no input value is given.\n give input value"
}

console.log(TestInput("hero"))
console.log(TestInput())

//# Comparison with the equality operator

function TestValue(value) {
    if (value == 5) {
        return "True";
    }
    return "False";
}

console.log(TestValue(5))
console.log(TestValue("5"))
/* for value == 5, then the value 5 or "5"
returns True where === is strict operators
so it will returns true for only 5 where as 
false for "5" */

function TestInput(value) {
    if (value === 5) {
        return "true";
    }
    return "false";
}

console.log(TestInput(5))
console.log(TestInput("5"))

//# Practice Comparing Different Values:

function compareEquality(a,b) {
    if (a == b) {
        return "True";
    }
    return "False";
}

console.log(compareEquality(10,"10"))

function compareEquality(a,b) {
    if (a===b) {
        return "true";
    }
    return "false";
}

console.log(compareEquality(10, "10"))

//# Other Operator

function TestLessOrEqual(val) {
    if (val <= 12) {
        return "less then 12";
    }
    if (val <= 24) {
        return `12 < ${val} <= 25`;
    }
    if (val <= 100) {
        return `24 < ${val} < 101`;
    }
    return "greater then 100";
}

result = TestLessOrEqual(55)
console.log(result)

function TestGreaterOrEquall(value) {
    if (value > 100) {
        return "greater then 100";
    }
    if (value > 50) {
        return "Greater then 50";
    }
    if (value > 10) {
        return "greater then 10";
    }
    return "less then 10";
}

value = TestGreaterOrEquall(55)
console.log(value)

//# Comparisons with the Logical And Operator:

function testLogicalAnd(value) {
    if (value >= 50 && value <= 100){
        return "True";
    }
    return "False";
}

val = testLogicalAnd(33)
console.log(val);

//# Comparisons with the logical or Operator

function testLogicalOr(val) {
    if (val>10 || val<50) {
        return "true";
    }
    return "False";
}

value = testLogicalOr(44);
console.log(value);

//# Else Statements

function TestELseIF(value) {
    if (value == 10) {
        return "true";
    } else {
        return "false";
    }
}
val = TestELseIF(11);
console.log(val);

function testIfElseIf(value) {
    if (value == 20) {
        return "true";
    } else if (value < 20) {
        return "smaller!";
    } else if (value > 100) {
        return "Greater then 100";
    } else {
        return "greater";
    }
}
val = testIfElseIf(44);
console.log(val);

//#Golf Code
Name = ["FC", "Barsa", "Chalse", "Eagle", "Welcome", "Jumants", "Go Home"]
function golfScore(strokes, par) {
    if (strokes == 1) {
        return Name[0];
    } else if (strokes <= par-2) {
        return Name[1];
    } else if (strokes == par-1) {
        return Name[2];
    } else if (strokes == par) {
        return Name[3];
    } else if (strokes == par+1) {
        return Name[4];
    } else if (strokes == par+2) {
        return Name[5];
    } else if(strokes >= per + 3) {
        return Name[6];
    }
}
team = golfScore(5, 4);
console.log(team)

//#Switch Statement

function UseOfSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "delta";
            break;
    }
    
    return answer;
}

console.log(UseOfSwitch(1))


function UseSwitch(value) {
    var answer = "";
    switch(value) {
        case 1:
            answer = "alpha";
            break;
    }
    return answer;    
}

console.log(UseSwitch(1))

function UseDefualtInSwitch(value){
    var answer = "";
    switch(value){
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Ball";
            break;
        case "c":
            answer = "Cat";
            break;
        default:
            answer = "Unknown";
            break;
    }
    return answer;
}

output = UseDefualtInSwitch("z")
console.log(output)

function sequencialSize(val) {
    var message = "";
   
    switch(val){
    case 1:
    case 2:
    case 3:
        message = "low";
        break;
    case 4:
    case 5:
    case 6:
        message = "mid";
        break;
    case 7:
    case 8:
    case 9:
        message = "high";
        break;
    default:
        message = "Not Recoznized"
   } 
   return message;
}

output = sequencialSize(10);
console.log(output);

//Returning Boolean Values from Functions:
 
function returningExpression(a, b) {
    return a < b;
}
output = returningExpression(10, 20);
console.log(output)

 //counting card
 var count = 0;
 function cc(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break
        case 10:
        case "J":
        case "K":
        case "Q":
        case "A":
            count--;   
    }
    var holdbet = "Hold"
    if (count > 2){
        holdbet = "bet";
    }

    return `${count} ${holdbet}`;

 }

 cc(2); cc(2); cc(2); cc(10)

 console.log(cc(2))

 //# java script object:

