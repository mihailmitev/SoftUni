function number100200(input) {
    let numValue = Number(input[0])
    if (numValue < 100) {
        console.log("Less than 100")
    } else if (numValue <= 200) {
        console.log("Between 100 and 200")
    } else if (numValue > 200) {
        console.log("Greater than 200")
    }
}
number100200(["100"])