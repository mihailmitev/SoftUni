function pig(input) {
    let [food, hay, cover, weigth] = input
    let foodGr = food * 1000
    let hayGr = hay * 1000
    let coverGr = cover * 1000
    let weigthGr = weigth * 1000
    let days = 1
    while (days <= 30) {
        foodGr -= 300
        if (days % 2 === 0) {
            hayGr -= (foodGr * 0.05)
        }
        if (days % 3 === 0) {
            coverGr -= weigthGr / 3
        }
        days++
    }
    let result1 = (foodGr / 1000).toFixed(2)
    let result2 = (hayGr / 1000).toFixed(2)
    let result3 = (coverGr / 1000).toFixed(2)
    if (foodGr > 0 && hayGr > 0 && coverGr > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${result1}, Hay: ${result2}, Cover: ${result3}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}
pig(["10", "5", "5.2", "1"])
pig(["1", "1.5", "3", "1.5"])