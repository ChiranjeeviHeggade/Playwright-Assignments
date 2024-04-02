const { log } = require("console");

console.log('****** REVERSE STRING ********');
let courseName = 'LeveL'
let reverseString

function doReverse(name) {
    let characters = name.split('')
    reverseString = ""
    for (let index = characters.length - 1; index >= 0; index--) {
        reverseString = reverseString + characters[index]
    }
    return reverseString
}
console.log('The Reverse String: ', doReverse(courseName));

function isPalindrome(reverseString) {
    if(reverseString == courseName ){
        return `${reverseString} is a Palindrome`
       }else{
           return `${reverseString} is a Not Palindrome`
       }
}
console.log('Is Palindrome?: ', isPalindrome(reverseString));



