function coffeeMachine(input) {
    let drink = input[0]
    let type = input[1]
    let order = Number(input[2])
    let sum = 0
    if (drink === "Espresso") {
        switch (type) {
            case "Without":
                sum = (order * 0.90) * 0.65;
                break;
            case "Normal":
                sum = order * 1.00;
                break;
            case "Extra":
                sum = order * 1.20;
                break;
        }
    } else if (drink === "Cappuccino") {
        switch (type) {
            case "Without":
                sum = (order * 1.00) * 0.65;
                break;
            case "Normal":
                sum = order * 1.20;
                break;
            case "Extra":
                sum = order * 1.60;
                break;
        }
    } else if (drink === "Tea") {
        switch (type) {
            case "Without":
                sum = (order * 0.50) * 0.65;
                break;
            case "Normal":
                sum = order * 0.60;
                break;
            case "Extra":
                sum = order * 0.70;
                break;
        }
    }
    if (drink === "Espresso" && order >= 5) {
        sum = sum * 0.75
    }
    if (sum > 15) {
        sum = sum * 0.8
    }
    console.log(`You bought ${order} cups of ${drink} for ${sum.toFixed(2)} lv.`);
}
coffeeMachine(["Tea",
    "Extra",
    "3"
])