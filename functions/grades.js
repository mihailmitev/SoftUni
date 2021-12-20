function grades(num) {
    if (num < 3) {
        description = 'Fail'
    } else if (num >= 3 && num < 3.5) {
        description = 'Poor'
    } else if (num < 4.5) {
        description = 'Good'
    } else if (num < 5.5) {
        description = 'Very good'
    } else if (num >= 5.5) {
        description = 'Excellent'
    }
    if (num >= 3) {
        console.log(`${description} (${num.toFixed(2)})`);
    } else {
        num = Math.floor(num)
        console.log(`Fail (${num})`);
    }

}

grades(2.99)