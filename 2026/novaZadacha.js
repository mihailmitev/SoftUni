function nova(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    if (a % 2 === 0){
        console.log("The first number is even")
    } else {
        console.log("The first number is odd")
    }
 if (b % 2 === 0){
        console.log("The second number is even")
    } else {
        console.log("The second number is odd")
    }
}

nova(['5', '10'])