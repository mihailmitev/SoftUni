function depositCalculator(input){
    let deposit = Number(input[0]);
    let timeline = Number(input[1]);
    let yearPercent = Number(input[2]);
let lihva = deposit * (yearPercent/100)
let monthLihva = lihva/12
let sum = deposit + (timeline * monthLihva);
    console.log(sum);

}
depositCalculator(["200 ",
"3 ",
"5.7 "]
)