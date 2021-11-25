function trainTheTrainers(input) {
    let index = 0
    let people = Number(input[index])
    index++
    let command = input[index]
    index++
    let sumOfgrade = 0
    let counter = 0
    while (command !== "Finish") {
       
        let name = command
        let temSUmOfgrade = 0
        for (let i = 0; i < people; i++) {
            counter++
            let grade = Number(input[index])
            index++
            temSUmOfgrade += grade
            sumOfgrade += grade
        }
        let avgTem = temSUmOfgrade / people
        console.log(`${name} - ${avgTem.toFixed(2)}.`);
        
        command = input[index]
        index++
        
    }
let avgGrade = sumOfgrade / counter
console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
])