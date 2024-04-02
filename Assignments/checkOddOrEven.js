function isOddOrEven(number) {
    if (number % 2 == 0) {
        return ` ${number} is a Even Number`
    } else {
        return ` ${number} is a Odd Number`
    }
}

console.log(isOddOrEven(100));