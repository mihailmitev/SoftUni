function oscars(input) {
 
    let index = 0;
    let name = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let raters = Number(input[index]);
    index++;
    let score = 0;
    let isNotEnoughPoints = true;
 
    for (let n = 0; n < raters; n++) {
        let rater = input[index];
        index++;
        score = academyPoints + ((rater.length * input[index]) / 2);
        academyPoints = score;
        index++;
 
        if (score >= 1250.5) {
            isNotEnoughPoints = false;
            console.log(`Congratulations, ${name} got a nominee for leading role with ${score.toFixed(1)}!`);
            break;
        }
    }
 
    if (isNotEnoughPoints) {
        let diff = Math.abs(1250.5 - score);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
 
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
