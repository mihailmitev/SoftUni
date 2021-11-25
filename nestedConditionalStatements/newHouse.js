function newHouse(input) {
    let flower = input[0]
    let numFlowers = Number(input[1])
    let budget = Number(input[2])
    let price = 0
    switch (flower) {
        case "Roses":
            price = numFlowers * 5.00
            if (numFlowers > 80) {
                price = price * 0.90
            }
            break;
        case "Dahlias":
            price = numFlowers * 3.80
            if (numFlowers > 90) {
                price = price * 0.85
            }
            break;
        case "Tulips":
            price = numFlowers * 2.80
            if (numFlowers > 80) {
                price = price * 0.85
            }
            break;
        case "Narcissus":
            price = numFlowers * 3.00
            if (numFlowers < 120) {
                price = price * 1.25
            }
            break;
        case "Gladiolus":
            price = numFlowers * 2.50
            if (numFlowers < 80) {
                price = price * 1.20
            }
            break;

    }
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }

}
newHouse(["Roses",
    "55",
    "250"
])
//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"