function integerandFloat(first, second, third) {
    let sum = first + second + third
    let round = Math.round(sum)
    if (sum === round) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
integerandFloat(9, 100, 1.1)