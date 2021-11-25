function footballTournament(input) {
    let name = input.shift()
    let games = Number(input.shift())
    let score = 0
    let total = 0
    let wincount = 0
    let percent = 0
    let doublecount = 0
    let loosecount = 0
    let sumsum = 0
    for (let i = 0; i <= games; i++) {
        let type = input.shift()
        if (type === "W") {
            score += 3
            wincount++
        } else if (type === "D") {
            score += 1
            doublecount++
        } else if (type === "L") {
            score += 0
            loosecount++
        }
        total = score

    }
    sumsum = wincount + doublecount + loosecount
    if (games > 0) {
        percent = (wincount / sumsum) * 100
        console.log(`${name} has won ${total} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wincount}`);
        console.log(`## D: ${doublecount}`);
        console.log(`## L: ${loosecount}`);
        console.log(`Win rate: ${percent.toFixed(2)}%`);
    } else {
        console.log(`${name} hasn't played any games during this season.`);
    }
}
footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"
])