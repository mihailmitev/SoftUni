function grades(input) {
    let index = 0
    let numStudents = Number(input[index])
    index++
    let fail = 0
    let failsum = 0
    let poor = 0
    let good = 0
    let veryGood = 0
    let average = 0
    let averageSum = 0
    let poorsum = 0
    let goodsum = 0
    let verygoodsum = 0
    for (i = 0; i <= numStudents; i++) {
        let grades = Number(input[index])
        index++
        if (grades >= 2 && grades <= 2.99) {
            failsum++
            fail += grades
            average += grades

        } else if (grades >= 3.00 && grades <= 3.99) {
            poorsum++
            poor += grades
            average += grades
        } else if (grades >= 4.00 && grades <= 4.99) {
            goodsum++
            good += grades
            average += grades
        } else if (grades >= 5.00) {
            verygoodsum++
            veryGood += grades
            average += grades
        }
    }
    console.log(`Top students: ${(verygoodsum/numStudents*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodsum/numStudents*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(poorsum/numStudents*100).toFixed(2)}%`);
    console.log(`Fail: ${(failsum/numStudents * 100).toFixed(2)}%`);
    averageSum = average / numStudents
    console.log(`Average: ${averageSum.toFixed(2)}`);
}
grades(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
])