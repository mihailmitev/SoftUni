function evenandOddSubtraction(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);

    }
    let sumEven = 0
    let sumOdd = 0
    for (let num of array) {
        if (num % 2 === 0) {
            sumEven += num
        } else {
            sumOdd += num
        }
    }
    let diff = sumEven - sumOdd
    console.log(diff);

}
evenandOddSubtraction([1, 2, 3, 4, 5, 6])