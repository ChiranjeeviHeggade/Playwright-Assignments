/**
 * Variables - var, let, const
 * 
 */

// ES5:
var firstName = 'First Name'
console.log(firstName);
var firstName = 'Last Name'
console.log(firstName);

// ES6: 
let fName = 'FName'
console.log(fName);
// let fName = 'LName'

console.log('**********************');
/**
 * Variable Scoping - Global, Function, and Block 
 */

let Gender = 'male' // Global Variable
function printGender() {
    let age = 30 // Function Variable
    if (Gender.startsWith('male')) {
        console.log('Function Variable from inside the block - ', age);
        let color = 'blue' // Block Variable
        console.log("Block Variable - ", color);
        console.log('He/Him');
    } else {
        console.log('She/Her');

    }
    console.log('Function Variable - ', age);
}
printGender()

// Hoisting
console.log('**********************');

console.log('Before Initializing - ', browserName);
var browserName = 'Chrome'
console.log('After Initializing - ', browserName);

/*
console.log(browserVersion);
let browserVersion = 100.0
console.log(browserVersion);
*/

console.log('********** HOME ASSIGNMENTS ************');

const browserVersion = 'Chrome' // Global Variable
function getBrowserVersion() {
    console.log('Global Variable - ', browserVersion);
    if (browserVersion == 'Chrome') {
        let browserVersion = 'Chrome' // Block Variable
        console.log("Block Variable - ", browserVersion);
    }

}
getBrowserVersion()