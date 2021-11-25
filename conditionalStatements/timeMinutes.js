function timeMinutes(input) {
    let hours = Number(input[0])
    let minutes = Number(input[1])
    let hoursInMin = hours * 60
    let time = hoursInMin + minutes + 15
    let displayMin = time % 60
    let displayHours = Math.floor(time / 60)
    if (displayHours > 23) {
        displayHours = 0
    }
    if (displayMin < 10) {
        console.log(`${displayHours}:0${displayMin}`);
    } else {
        console.log(`${displayHours}:${displayMin}`);
    }
}
timeMinutes(["23", "59"])