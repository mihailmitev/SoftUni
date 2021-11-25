function hotelRoom(input) {
    let month = input[0];
    let numberDays = Number(input[1]);
    // let apartPrice = 0.0;
    // let accommodation = 0.0;
    let cost = 0.0;
    let price = 0.0;

    switch (month) {
        case "May":
        case "October":
            if (numberDays >= 14) {
                cost = 65 * numberDays * 0.90;
                price = (50 * numberDays) * 0.70;
                break;
            } else if (numberDays > 7 && numberDays < 14) {
                price = (50 * numberDays) * 0.95;
                cost = 65 * numberDays;
            } else if (numberDays > 0 && numberDays <= 7)
                price = 50 * numberDays;
            cost = 65 * numberDays;
            break;
        case "June":
        case "September":
            if (numberDays > 14) {
                cost = (68.70 * numberDays) * 0.90;
                price = (75.20 * numberDays) * 0.80;
            } else {
                cost = 68.70 * numberDays;
                price = 75.20 * numberDays;
            }
            break;
        case "July":
        case "August":
            if (numberDays > 14) {
                cost = (77 * numberDays) * 0.90;
                price = 76 * numberDays;
            } else {
                cost = 77 * numberDays;
                price = 76 * numberDays;
            }
            break;
    }
    console.log(`Apartment: ${cost.toFixed(2)} lv.`);
    console.log(`Studio: ${price.toFixed(2)} lv.`);
}
hotelRoom(["May",
    "15"
])