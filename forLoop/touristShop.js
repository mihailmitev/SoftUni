function touristShop(input) {
    let budget = Number(input[0]);
    let totalPrice = 0;
    let notEnough = false;
    let productsCount = 0;
    let index = 1;
    let command = input[index++];
    while (command !== 'Stop') {
        let priceProduct = Number(input[index++]);
        if ((productsCount + 1) % 3 === 0) {
            priceProduct /= 2;
        }
        if (priceProduct > budget) {
            notEnough = true;
            console.log(`You don't have enough money!`);
            console.log(`You need ${(priceProduct - budget).toFixed(2)} leva!`);
            break;
        }
        budget -= priceProduct;
        totalPrice += priceProduct;
        productsCount++;
        command = input[index++];
    }
    if (!notEnough) {
        console.log(`You bought ${productsCount} products for ${totalPrice.toFixed(2)} leva.`);
    }
}
touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"
])