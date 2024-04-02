
let wordOne = 'Listen'
let wordTwo = 'silent'

function checkAnagram(wordOne, wordTwo) {
    let sortedWordOne = wordOne.toLowerCase().split("").sort()
    let sortedWordTwo = wordTwo.toLowerCase().split("").sort()

    for (let i = 0; i < sortedWordOne.length; i++) {
        for (let j = 0; j < sortedWordTwo.length; j++) {
            if (sortedWordOne[i] != sortedWordTwo[j]) {
                return false
            } else {
                return true
            }

        }

    }
}

console.log('aretheStringsAnagram?: ',checkAnagram(wordOne, wordTwo));
