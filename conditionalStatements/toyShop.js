function toyShop(input) {
    let trip = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);
    let totalItemsPrice = puzzle * 2.60 + doll * 3 + bear * 4.10 +
        minions * 8.20 + truck * 2;
    let totalToysCount = puzzle + doll + bear + minions + truck;

    if (totalToysCount >= 50) {
        totalItemsPrice = totalItemsPrice * 0.75
    }
    totalItemsPrice = totalItemsPrice - totalItemsPrice * 0.10

    let moneyTrip = Math.abs(totalItemsPrice - trip)

    if (totalItemsPrice >= trip) {

        console.log(`Yes! ${moneyTrip.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyTrip.toFixed(2)} lv needed.`);
    }
}
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"
])