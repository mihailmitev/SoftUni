function energyBooster(input) {
    let fruit = input[0]
    let setSize = input[1]
    let setOrders = Number(input[2])
    let sum = 0
    if (setSize === "small") {
        switch (fruit) {
            case "Watermelon":
                sum = setOrders * 2 * 56.00;
                break;
            case "Mango":
                sum = setOrders * 2 * 36.66;
                break;
            case "Pineapple":
                sum = setOrders * 2 * 42.10;
                break;
            case "Raspberry":
                sum = setOrders * 2 * 20.00;
                break;
        }
    } else if (setSize === "big") {
        switch (fruit) {
            case "Watermelon":
                sum = setOrders * 5 * 28.70;
                break;
            case "Mango":
                sum = setOrders * 5 * 19.60;
                break;
            case "Pineapple":
                sum = setOrders * 5 * 24.80;
                break;
            case "Raspberry":
                sum = setOrders * 5 * 15.20;
                break;
        }
    }
    if (sum < 400) {
        sum = sum
    } else if (sum <= 1000) {
        sum = sum * 0.85
    } else if (sum => 1000) {
        sum = sum * 0.5
    }
    console.log(`${sum.toFixed(2)} lv.`);
}
energyBooster(["Pineapple",
"small",
"1"])


