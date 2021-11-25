function christmasPreparation(input) {
    let rolls = Number(input[0])
    let sheet = Number(input[1])
    let glue = Number(input[2])
    let discount = Number(input[3])
    let rollsPrice = rolls * 5.80
    let sheetPrice = sheet * 7.20
    let gluePrice = glue * 1.20
    let total = rollsPrice + sheetPrice + gluePrice
    let totalDiscount = total - (total * discount / 100)
    console.log(totalDiscount.toFixed(3));


}
christmasPreparation(["2",
    "3",
    "2.5",
    "25"
])