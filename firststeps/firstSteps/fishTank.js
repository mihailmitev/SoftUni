function fishTank(input){
let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percent = Number(input[3]);

let volume = lenght * width * height;
let volInLiters = volume * 0.001;
let liters = volInLiters * (1-0.17);
console.log(liters)

}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]

)