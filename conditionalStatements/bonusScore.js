function bonusScore(input) {
    let num = Number(input[0])
    let bonus = 0
    if (num <= 100) {
        bonus = bonus + 5
    } else if (num > 1000) {
        bonus = num * 0.1
    } else {
        bonus = num * 0.2
    }
    if (num % 2 === 0) {
        bonus = bonus + 1
    } else if (num % 10 === 5) {
        bonus = bonus + 2
    }
    let totalSum = num + bonus
    console.log(bonus);
    console.log(totalSum);
}
bonusScore(["2703"])