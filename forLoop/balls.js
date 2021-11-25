function balls(input) {
    let index = 0
    let num = Number(input[index])
    index++
   
    let score = 0
    let countBallRed = 0
    let countBallOrange = 0
    let countBallYellow = 0
    let countBallWhite = 0
    let countBallBlack = 0
    let countBallOther = 0

    for (i = 0; i < num; i++) {
        let type = input[index]
        index++
        if (type === "red") {
            score += 5
            countBallRed += 1
        } else if (type === "orange") {
            score += 10
            countBallOrange += 1

        } else if (type === "yellow") {
            score += 15
            countBallYellow += 1
        } else if (type === "white") {
            score += 20
            countBallWhite += 1

        } else if (type === "black") {
            score = Math.floor(score / 2)
            countBallBlack += 1

        } else {
            countBallOther += 1
        }

    }
    console.log(`Total points: ${score}`);
    console.log(`Points from red balls: ${countBallRed}`);
    console.log(`Points from orange balls: ${countBallOrange}`);
    console.log(`Points from yellow balls: ${countBallYellow}`);
    console.log(`Points from white balls: ${countBallWhite}`);
    console.log(`Other colors picked: ${countBallOther}`);
    console.log(`Divides from black balls: ${countBallBlack}`);
}
balls(["3",
    "white",
    "black",
    "pink"
])
//