function building(input) {
    let floor = Number(input[0])
    let apartment = Number(input[1])
    for (let i = floor; i > 0; i--) {
        let result = ""
        for (let j = 0; j < apartment; j++) {
            if (i % 2 === 0 && i !== floor) {
                result += "O" + i + j + " "
            } else if (i % 2 === 1 && i !== floor) {
                result += "A" + i + j + " "
            } else if (i === floor) {
                result += "L" + i + j + " "
            }
        }
        console.log(result);
    }
}
building(["9", "5"])