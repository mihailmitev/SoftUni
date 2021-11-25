function hotelRoom(input) {
    let month = input[0];
    let numNights = Number(input[1]);
    let sumApartment = 0;
    let sumStudio = 0;
    if (month === "May" || month === "October") {
        let apartment = 65;
        let studio = 50;
        if (numNights > 7 && numNights <= 14) {
            sumStudio = (studio * 0.95) * numNights
            sumApartment = apartment * numNights
            console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
        } else if (numNights > 14) {
            sumStudio = (studio * 0.70) * numNights
            sumApartment = (apartment * 0.90) * numNights
            console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
        } else if ((numNights > 0 && numNights <= 7)){
            sumStudio = sumStudio * studio
            sumApartment = sumApartment * apartment
        }
    }
    if (month === "June" || month === "September ") {
        let apartment = 68.70;
        let studio = 75.20;
        if (numNights <= 14) {
            sumStudio = studio * numNights
            sumApartment = apartment * numNights
            console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
        } else if (numNights > 14) {
            sumStudio = (studio * 0.80) * numNights
            sumApartment = (apartment * 0.90) * numNights
            console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
        }
    }
    if (month === "July" || month === "August") {
        let apartment = 77;
        let studio = 76;
        if (numNights <= 14) {
            sumStudio = studio * numNights
            sumApartment = apartment * numNights
            console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
        } else if (numNights > 14) {
            sumStudio = studio * numNights
            sumApartment = (apartment * 0.90) * numNights
            console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
        }
    }
}
hotelRoom(["May",
"15"])

