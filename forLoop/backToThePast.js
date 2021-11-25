function backToThePast(input) {
    let money = Number(input[0])
    let age = Number(input[1])
    let leftM = 0
    let ivancho = 17
    for (let i = 1800; i <= age; i++) {
        if (i % 2 === 0) {
            ivancho ++
            leftM += 12000
        } else if (i % 2 !== 0) {

            ivancho ++
            leftM += 12000 + ivancho * 50

        }
    }
    diff = money - leftM



    if (diff >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(diff.toFixed(2))} dollars to survive.`);
    }
}
backToThePast(["100000.15",
    "1808"
])