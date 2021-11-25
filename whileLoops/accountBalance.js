function accountBalance(input) {
    let totaslSum = 0
    let index = 0
    let currentInput = input[index]
    while (currentInput !== "NoMoreMoney") {
        let inAsNum = Number(currentInput)
        if (inAsNum < 0) {
            console.log("Invalid operation!");
            break;

        }
        totaslSum += inAsNum
        console.log(`Increase: ${inAsNum.toFixed(2)}`);
        index++
        currentInput = input[index]
    }
console.log(`Total: ${totaslSum.toFixed(2)}`);


}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"
])