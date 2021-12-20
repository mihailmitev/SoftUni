function addAndSubtract(a, b, c) {
    function sum(a, b) {
        let result = a + b;
        return result;
    }

    function subtract(a, b) {
        let result = a - b;
        return result;
    }
    let numbersSum = sum(a, b)
    let result = subtract(numbersSum, c)
    return result;
}
let result = addAndSubtract(23, 6, 10)
console.log(result);