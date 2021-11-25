function computerFirm(input) {
    let index = 0
    let num = Number(input[index++])
    let rating = 0
    let sales = 0
    let possibleSales = 0
    let allMadeSales = 0
    let sumrating = 0
    let count = 0
    let average = 0
    for (let i = 0; i < num; i++) {

        let models = Number(input[index])
        let rating = models % 10;
        let sales = (models - rating) / 10;
        if (rating === 2) {
            possibleSales = sales * 0
        } else if (rating === 3) {
            possibleSales = sales * 0.5
        } else if (rating === 4) {
            possibleSales = sales * 0.7
        } else if (rating === 5) {
            possibleSales = sales * 0.85
        } else if (rating === 6) {
            possibleSales = sales
        }
        allMadeSales += possibleSales
        sumrating += rating
        index++
        count++
    }
    console.log(allMadeSales.toFixed(2));
    average = sumrating / count
    console.log(average.toFixed(2));
}
computerFirm(["3",
    "103",
    "103",
    "103"
])
// let hundreds = num % 10;
//     let left1 = (num - hundreds)/ 10;
//     let decimals = left1 % 10;
// •	Рейтинг 2 взима 0% от  възможните продажби.
// •	Рейтинг 3 взима 50% от възможните продажби.
// •	Рейтинг 4 взима 70% от възможните продажби.
// •	Рейтинг 5 взима 85% от възможните продажби.
// •	Рейтинг 6 взима 100% от възможните продажби.