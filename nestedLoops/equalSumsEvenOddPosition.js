function equalSumsEvenOddPosition(input) {
    let startN = Number(input[0])
    let endN = Number(input[1])
    let result = "";
    for (let i = startN; i <= endN; i++) {
        let evenSUm = 0
        let oddSum = 0
        let numToString = i + "";
        for (let index = 0; index < numToString.length; index++) {
            if (index % 2 === 0) {
                evenSUm += Number(numToString[index])
            } else {
                oddSum += Number(numToString[index])
            }
        }
        if (evenSUm === oddSum) {
            result += numToString + " ";
        }
        
    }
    console.log(result);
}
equalSumsEvenOddPosition(["100000",
"100050"])
