// NULLISH COALESCING OPERATOR "??"

/* 
a ?? b
if a is defined, then a
if a is not defined, then b

if the value is 'undefined' or 'null' then
return b else a. */

let a;
let b = 'nullish_operator';
let result;

result = (a != null && a != undefined)
? a : b;
console.log(result)
//alternative

result = a ?? b;
console.log(result)

let userName;
let passWord;
let nickName = 'JS'
let details;
details = userName ?? passWord ?? nickName;
console.log(details)

let height, width = 10;
let area;

area = (height ?? 100) * (width ?? 10)
console.log(area)

console.log((1 && 2) ?? 3)
console.log((null ?? 3) && 2)