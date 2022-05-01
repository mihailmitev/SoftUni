function spice(yield) {
    let spicesExtracted = 0
    let dayCounter = 0
    while (yield >= 100) {
        dayCounter++
        spicesExtracted += yield - 26
        yield -= 10
    }
    console.log(dayCounter);
    if (dayCounter != 0) {
        console.log(spicesExtracted - 26);
    } else {
        console.log(spicesExtracted);
    }
}
spice(111)