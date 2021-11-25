function godzillavsKong(input) {
    let filmBudget = Number(input[0]);
    let numStatics = Number(input[1]);
    let staticsWear = Number(input[2]);
    let decoration = filmBudget * 0.10;
    let sumStaicsWear = numStatics * staticsWear;
    if (numStatics > 150) {
        sumStaicsWear = sumStaicsWear * 0.9
    }
    let totalSumNeed = decoration + sumStaicsWear;
    let total = Math.abs(filmBudget - totalSumNeed)

    if (filmBudget >= totalSumNeed) {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${total.toFixed(2)} leva more.`)
    }

}
godzillavsKong(["9587.88",
    "222",
    "55.68"
])