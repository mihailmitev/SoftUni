function fruitMarket(input) {
    let strawberryPrice = Number(input[0])
    let bananasKg = Number(input[1])
    let orangesKg = Number(input[2])
    let raspberryKg = Number(input[3])
    let strawberryKg = Number(input[4])
    let raspberryPrice = strawberryPrice / 2
    let orangesPrice = raspberryPrice - (raspberryPrice * 0.4)
    let bananasPrice = raspberryPrice - (raspberryPrice * 0.8)
    let strawberrySum = strawberryPrice * strawberryKg
    let raspberrySum = raspberryPrice * raspberryKg
    let banansSum = bananasKg * bananasPrice
    let orangesSUm = orangesPrice * orangesKg
    let sum = strawberrySum + raspberrySum + banansSum + orangesSUm
    console.log(sum.toFixed(2));

}
fruitMarket(["48",
    "10",
    "3.3",
    "6.5",
    "1.7"
])