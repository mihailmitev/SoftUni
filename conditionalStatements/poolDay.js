function poolDay(input) {
    let numPeople = Number(input[0])
    let entryTax = Number(input[1])
    let taxSunbed = Number(input[2])
    let taxUmbrella = Number(input[3])
    let sumTax = numPeople * entryTax
    let sumSunbed = Math.ceil(numPeople * 0.75) * taxSunbed
    let sumUmbrella = Math.ceil(numPeople / 2) * taxUmbrella
    let sum = sumTax + sumSunbed + sumUmbrella
    console.log(`${sum.toFixed(2)} lv.`);

}
poolDay(["21",
    "5.50",
    "4.40",
    "6.20"
])