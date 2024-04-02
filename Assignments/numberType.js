function checkNumberType(number) {
    if (number > 0) {
        return `${number} is a Positive Number`
    } else if (number < 0) {
        return `${number} is a Negative Number`
    } else if (number == 0) {
        return `${number} is equal to Zero`
    }
}

console.log(checkNumberType(0));