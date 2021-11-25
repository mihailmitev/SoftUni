function deerOfSanta(input) {
    let days = Number(input[0])
    let amountFood = Number(input[1])
    let deer1 = Number(input[2])
    let deer2 = Number(input[3])
    let deer3 = Number(input[4])
    let deer1Need = days * deer1
    let deer2Need = days * deer2
    let deer3Need = days * deer3
    let totalFood = deer1Need + deer2Need + deer3Need
    let diff = Math.floor(amountFood - totalFood)
    let diff2 = Math.ceil(totalFood - amountFood)
    if (amountFood > totalFood) {
        console.log(`${diff} kilos of food left.`);
    } else if (amountFood < totalFood) {
        console.log(`${diff2} more kilos of food are needed.`);
    }
}
deerOfSanta
    (["5",
        "10",
        "2.1",
        "0.8",
        "11"
    ])