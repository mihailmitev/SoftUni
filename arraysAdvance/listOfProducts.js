function products(input) {
    let sorted = input.sort()
    for (let i = 0; i < input.length; i++) {
        console.log(`${i+1}.${input[i]}`);
    }
}
products(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])