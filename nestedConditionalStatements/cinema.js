function cinema(input) {
    let type = input[0]
    let rows = Number(input[1])
    let colums = Number(input[2])
    let profit = 0
    if (type === "Premiere") {
        profit = rows * colums * 12
        console.log(`${profit.toFixed(2)} leva`);
    } else if (type === "Normal") {
        profit = rows * colums * 7.50
        console.log(`${profit.toFixed(2)} leva`);
    } else if (type === "Discount") {
        profit = rows * colums * 5
        console.log(`${profit.toFixed(2)} leva`);
    }

}
cinema(["Premiere",
    "10",
    "12"
])