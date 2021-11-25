function backPast(input) {
    let index = 0
    let heritage = Number(input[index])
    index++
    let year = Number(input[index])
    index++

    let hisYears = 18
    let past = 1800
    let lostMoney = 0

    for (let i = past; i <= year; i++) {

        if (i % 2 === 0) {
            heritage -= 12000
            lostMoney = heritage
            hisYears++
        } else {
            heritage -= 12000 + 50 * hisYears
            lostMoney = heritage
            hisYears++
        }

    }
    let diff = Math.abs(heritage)
    if (heritage > 0) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }

}
backPast
    (["100000.15",
        "1808"
    ])