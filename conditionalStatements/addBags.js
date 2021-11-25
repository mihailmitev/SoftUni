function addBags(input) {
    let luggageOver20 = Number(input[0])
    let luggageKg = Number(input[1])
    let daysToFly = Number(input[2])
    let numOfBags = Number(input[3])
    if (luggageKg < 10) {
        luggageOver20 = luggageOver20 * 0.2
    } else if (luggageKg > 20) {
        luggageOver20 = Number(input[0])
    } else {
        luggageOver20 = luggageOver20 * 0.5
    }
    if (daysToFly < 7) {
        luggageOver20 = luggageOver20 * 1.4
    } else if (daysToFly > 30) {
        luggageOver20 = luggageOver20 * 1.1
    } else {
        luggageOver20 = luggageOver20 * 1.15
    }


let priceTotal = luggageOver20 * numOfBags
console.log(`The total price of bags is: ${priceTotal.toFixed(2)} lv. `);
}

addBags(["25.50",
"5",
"36",
"6"])




