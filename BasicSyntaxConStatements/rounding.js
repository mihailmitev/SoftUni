function rounding(number, percision) {
    if (percision > 15) {
        percision = 15
    };
    const rounded = number.toFixed(percision)
    const withoutZero = parseFloat(rounded);
    console.log(withoutZero);
}
rounding(3.1415926535897932384626433832795, 2)
rounding(10.5, 3)