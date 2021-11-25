function series(input) {
    let budget = Number(input.shift())
    let movieCount = Number(input.shift())
    let sum = 0
    let diffa = 0
    for (let i = 0; i < movieCount; i++) {
        let name = input.shift()
        let price = Number(input.shift())
        if (name === "Thrones") {
            price *= 0.5
        } else if (name === "Lucifer") {
            price *= 0.6
        } else if (name === "Protector") {
            price *= 0.7
        } else if (name === "TotalDrama") {
            price *= 0.8
        } else if (name === "Area") {
            price *= 0.9
        }
        sum += price
    }
    diffa = Math.abs(budget - sum)
    if (budget >= sum) {
        console.log(`You bought all the series and left with ${diffa.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diffa.toFixed(2)} lv. more to buy the series!`);
    }
}
series(["10",
"3",
"Thrones",
"5",
"Riverdale",
"5",
"Gotham",
"2"])
