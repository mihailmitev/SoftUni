function tennisRanklist(input) {
    let index = 0
    let count = Number(input[index]);
    index++;
    let StartPoints = Number(input[index]);
    index++;
    let score = 0
    let winCounter = 0
    for (let i = 0; i < count; i++) {
        let etap = input[index];
        index++;
        if (etap === "W") {
            score += 2000
            winCounter++
        } else if (etap === "F") {
            score += 1200
        } else {
            score += 720
        }
    }
    let totalP = StartPoints + score
    console.log(`Final points: ${totalP}`);
    let average = Math.floor(score / count)
    console.log(`Average points: ${average}`);
    let totalWin = winCounter / count * 100
    console.log(`${totalWin.toFixed(2)}%`);
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
])