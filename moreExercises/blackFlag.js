function blackFlag(input) {
    let days = Number(input.shift())
    let dailyPlunder = Number(input.shift())
    let expectedPlunder = Number(input.shift())
    let plunder = 0
    let count = 0
    let total = 0
    for (let i = 1; i <= days; i++) {

        plunder += dailyPlunder
        if (i % 3 === 0) {
            plunder += dailyPlunder * 0.5
        }
        if (i % 5 === 0) {
            plunder *= 0.7
        }
    }
    total = plunder / expectedPlunder * 100
    if (plunder >= expectedPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${total.toFixed(2)}% of the plunder.`);
    }

}


blackFlag(["10",
    "20",
    "380"
])