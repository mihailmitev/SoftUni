function safari(input) {
    let budget = Number(input[0])
    let litersFuel = Number(input[1])
    let day = input[2]
    let fuelCost = litersFuel * 2.10
    let costWithGuide = fuelCost + 100
    if (day === "Sunday") {
        costWithGuide = costWithGuide * 0.8
    } else if (day === "Saturday") {
        costWithGuide = costWithGuide * 0.9
    }
    if (budget >= costWithGuide) {
        console.log(`Safari time! Money left: ${(budget  - costWithGuide).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(costWithGuide - budget).toFixed(2)} lv.`)
    }

}
safari(["120",
"30",
"Saturday"])
