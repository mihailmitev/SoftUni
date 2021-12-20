function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expences = 0
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expences += helmetPrice
        }
        if (i % 3 === 0) {
            expences += swordPrice
        }
        if (i % 6 === 0) {
            expences += shieldPrice
        }
        if (i % 12 === 0) {
            expences += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)