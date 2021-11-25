function pCGameShop(input) {
    let numGames = Number(input.shift())
    let heart = 0
    let fortnite = 0
    let overwatch = 0
    let others = 0
    let sum = 0
    let sumH = 0
    let sumF = 0
    let sumO = 0
    let sumotH = 0
    for (let i = 0; i < numGames; i++) {
        let game = input.shift()
        if (game === "Hearthstone") {
            heart++
        } else if (game === "Fornite") {
            fortnite++
        } else if (game === "Overwatch") {
            overwatch++
        } else {
            others++
        }
    }
    sum = heart + fortnite + overwatch + others
    sumH = heart / sum * 100
    sumF = fortnite / sum * 100
    sumO = overwatch / sum * 100
    sumotH = others / sum * 100
    console.log(`Hearthstone - ${sumH.toFixed(2)}%`);
    console.log(`Fornite - ${sumF.toFixed(2)}%`);
    console.log(`Overwatch - ${sumO.toFixed(2)}%`);
    console.log(`Others - ${sumotH.toFixed(2)}%`);

}
pCGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
])