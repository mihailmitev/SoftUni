function computerStore(array) {
    let price = 0
    let totalWithTax = 0
    let tax = 0
    let priceDiscount = 0
    let type = array.pop().toLowerCase()
    let myLength = array.length
    if (myLength < 1) {
        console.log('Invalid order!');
        return;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            console.log('Invalid price!');
        }
        if (array[i] === 'special' || array[i] === 'regular') {
            break;
        }
    }
    for (let i = 0; i < array.length; i++) {
        array = array.filter(x => x > -1);
        price += Number(array[i])
    }
    if (type === 'special') {
        priceDiscount = price * 0.9
    } else {
        priceDiscount = price
    }
    totalWithTax = priceDiscount * 1.2

    tax = price * 0.2
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${price.toFixed(2)}$
Taxes: ${tax.toFixed(2)}$
-----------
Total price: ${totalWithTax.toFixed(2)}$`);
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])