function theatrePromotions(day, age) {
    let price = 0
    if (age < 0 || age > 123 || day == !'Holiday' || day == !'Weekend' || day == !'Weekday') {
        console.log('Error!');
    }
    else if (day === 'Weekday') {
        if (age >= 0 && age <= 18) {
            price = 12
        } else if (age > 18 && age <= 64) {
            price = 18
        } else if (age > 64 && age <= 122) {
            price = 12
        }
        console.log(`${price}$`);
    } else if (day === 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = 15
        } else if (age > 18 && age <= 64) {
            price = 20
        } else if (age > 64 && age <= 122) {
            price = 15
        }
        console.log(`${price}$`);
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5
        } else if (age > 18 && age <= 64) {
            price = 12
        } else if (age > 64 && age <= 122) {
            price = 10
        }
        console.log(`${price}$`);
    }


}

theatrePromotions('Holiday', -12)