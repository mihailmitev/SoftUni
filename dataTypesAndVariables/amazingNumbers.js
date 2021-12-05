function amazingNumbers(number) {
    let numAsStr = number.toString();
    let sum = 0
    for (let i = 0; i < numAsStr.length; i++) {
        let current = Number(numAsStr[i])
        sum += current
    }
    let sumAsStr = sum.toString()
    let hasnine = false
    for (let i = 0; i < sumAsStr.length; i++) {
        if (sumAsStr[i] == '9') {
            hasnine = true
            break;
        }
    }
    console.log(`${number} Amazing? ${hasnine ? 'True' : 'False'}`);
}
amazingNumbers(1233)