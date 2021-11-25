function fitnessCenter(input) {
    let num = Number(input.shift())
    let back = 0
    let chest = 0
    let legs = 0
    let abs = 0
    let shake = 0
    let bar = 0
    let total = 0
    let work = 0
    let buy = 0
    let percentWork = 0
    let percentBuy = 0
    for (let i = 0; i <= num; i++) {
        let type = input.shift()
        if (type === "Back") {
            back++
            total++
            work++
        } else if (type === "Chest") {
            chest++
            total++
            work++
        } else if (type === "Legs") {
            legs++
            total++
            work++
        } else if (type === "Abs") {
            abs++
            total++
            work++
        } else if (type === "Protein shake") {
            shake++
            total++
            buy++
        } else if (type === "Protein bar") {
            bar++
            total++
            buy++
        }

    }
    percentBuy = buy / total * 100
    percentWork = work / total * 100
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${percentWork.toFixed(2)}% - work out`);
    console.log(`${percentBuy.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"
])
// Ред 1 -	"{брой хора трениращи гръб} - back"
// Ред 2 -	"{брой хора трениращи гърди} - chest"
// Ред 3 -	"{брой хора трениращи крака} - legs"
// Ред 4 -	"{брой хора трениращи коремни мускули} - abs"
// Ред 5 -	"{брой хора закупили протеинов шейк} - protein shake"
// Ред 6 -	"{брой хора закупили протеинов блок} - protein bar"
// Ред 7 -	"{процент на хората дошли да тренират}% - work out"
// Ред 8 -	"{процент на хората дошли да купят протеин}% - protein"