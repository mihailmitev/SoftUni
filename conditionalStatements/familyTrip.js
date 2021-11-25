function familyTrip(input) {
    let budget = Number(input[0])
    let numNights = Number(input[1])
    let priceForNight = Number(input[2])
    let additionalCost = Number(input[3])
    if (numNights > 7) {
        priceForNight = priceForNight * 0.95
    }
    let priceAllNights = numNights * priceForNight
    let sumAdditionalCost = budget * additionalCost / 100
    let sumNeed = sumAdditionalCost + priceAllNights
    if (sumNeed <= budget) {
        console.log(`Ivanovi will be left with ${(budget-sumNeed).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(sumNeed - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip(["500",
    "7",
    "66",
    "15"
])