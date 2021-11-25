function foodDelivery (input){
let chicken = Number(input[0]) * 10.35;
let fish = Number(input[1]) * 12.4;
let vegii = Number(input[2]) * 8.15;
let totalSum = chicken + fish + vegii;
let desert = totalSum *0.2;
let total = totalSum + desert + 2.50;
console.log(total);
}
foodDelivery(["2 ",
"4 ",
"3 "]
)