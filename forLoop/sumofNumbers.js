function sumofNumbers(input) {
    let num = input[0]
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        let currentDigits = Number(num[i])
        sum += currentDigits


    }
    console.log(`The sum of the digits is:${sum}`);
}
sumofNumbers(["1234"])
//The sum of the digits is:10 