function everest(input) {
    let start = 5364
    let target = 8848
    let index = 0
    let currentHeight = 0
    let count = 0
    let totalHeight = 0
    let dayscount = 0
    while (target > totalHeight) {
        let text = input[index++]
        let dayHeight = Number(input[index++])
        if (text === "END") {
            console.log(`Failed!`);
            console.log(`${totalHeight}`);
            break;
        }
        if (text === "Yes") {
            count++
        }
        if (count === 5 && totalHeight < target) {
            console.log(`Failed!`);
            console.log(`${totalHeight}`);
            break;
        }
        currentHeight += dayHeight
        totalHeight = currentHeight + start
        dayscount++
        if (totalHeight >= target) {
            console.log(`Goal reached for ${dayscount} days!`);
        }
    }
}
everest(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"
])