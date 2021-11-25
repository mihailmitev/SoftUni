function basketballEquipment(input){
let training = Number(input[0]);
    let sneakers = training * 0.60;
    let suit = sneakers * 0.80;
    let ball = suit / 4;
    let acc = ball / 5;
 let sum = training + sneakers + suit + ball + acc;
console.log(sum)
}
basketballEquipment(["365"]) 