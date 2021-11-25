function excursionCalculator(input) {
    let people = Number(input[0])
    let season = input[1]
    let price = 0
    if (people <= 5) {
        switch (season) {
            case "spring":
                price = people * 50.00;
                break
            case "summer":
                price = (people * 48.50) * 0.85;
                break
            case "autumn":
                price = people * 60.00;
                break
            case "winter":
                price = (people * 86.00) * 1.08;
                break
        }
    } else if (people > 5) {
        switch (season) {
            case "spring":
                price = people * 48.00;
                break
            case "summer":
                price = (people * 45.00) * 0.85;
                break
            case "autumn":
                price = people * 49.50;
                break
            case "winter":
                price = (people * 85.00) * 1.08;
                break
        }
    }
    console.log(`${price.toFixed(2)} leva.`);
}
excursionCalculator(["5",
    "spring"
])