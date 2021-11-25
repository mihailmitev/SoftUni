function shopping(input) {
    let budget = Number(input[0]);
    let numVideoCards = Number(input[1]);
    let numProcessors = Number(input[2]);
    let numRam = Number(input[3]);
    let priceVideoCards = 250 * numVideoCards;
    let priceOneProcessor = priceVideoCards * 0.35;
    let priceAllProcessors = numProcessors * priceOneProcessor;
    let priceofRam = priceVideoCards * 0.1;
    let priceAllRam = priceofRam * numRam;
    let totalPrice = priceAllRam + priceAllProcessors + priceVideoCards;

    if (numVideoCards > numProcessors) {
        totalPrice = totalPrice * 0.85
    }
    let budgetDifference = Math.abs(budget - totalPrice)
    if (budget >= totalPrice) {
        console.log(`You have ${budgetDifference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${budgetDifference.toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"
])