function solve(text) {
    let words = text.split(' ').filter((el) => el !== '')
    let totalSum = 0
    let isUpperCase = (letter) => letter.toUpperCase() === letter
    let getAlphabetPosition = (letter) => letter.charCodeAt(0) - 96

    words.forEach((word) => {
        let letterBefre = word[0]
        let letterAfter = word[word.length - 1]
        let number = Number(word.substring(1, word.length - 1))
        let beforePosition = getAlphabetPosition(letterBefre.toLowerCase())
        let afterPosition = getAlphabetPosition(letterAfter.toLowerCase())
        if (isUpperCase(letterBefre)) {
            number /= beforePosition
        } else {
            number *= beforePosition
        }
        if (isUpperCase(letterAfter)) {
            number -= afterPosition
        } else {
            number += afterPosition
        }
        totalSum += number
    })
    console.log(totalSum.toFixed(2));
}
solve('A12b s17G')