const userID = 12345
let userEmail = 'pradip.gadal.25@gmail.com'
var userAddress = 'Biratnagar'          
// var is avoided in morden JS due to it's lacking block and functional scope concept.
userTires = 3
let userState;

// const userID cannot be manupulate / change
/* 
userID = 2344 
console.log(userID)  //ERR : assignment to const variable 
*/

userEmail = 'pradip.gadal.369@gmail.com'
userAddress = 'Belbari'
userTires = 5

console.table([userID, userEmail, userAddress, userTires, userState])

// only the variable decleration without value JS will assume it as undefined.