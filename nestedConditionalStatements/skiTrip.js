function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let priceOnePerson = 18.00;
    let priceApartment = 25.00;
    let pricePresident = 35.00;
    let nights = days - 1;
    let sum = 0;
    if (type === "room for one person") {
        switch (grade) {
            case "positive":
                sum = (priceOnePerson * nights) * 1.25
                console.log(`${sum.toFixed(2)}`);
                break;
            case "negative":
                sum = (priceOnePerson * nights) * 0.9
                console.log(`${sum.toFixed(2)}`);
                break;
        }
    }
    if (type === "apartment") {
        if (days < 10) {
            switch (grade) {
                case "positive":
                    sum = ((priceApartment * nights) * 0.7) * 1.25
                    console.log(`${sum.toFixed(2)}`);
                    break;
                case "negative":
                    sum = ((priceApartment * nights) * 0.7) * 0.9
                    console.log(`${sum.toFixed(2)}`);
                    break;
            }
        } else if (days <= 15) {
            switch (grade) {
                case "positive":
                    sum = ((priceApartment * nights) * 0.65) * 1.25
                    console.log(`${sum.toFixed(2)}`);
                    break;
                case "negative":
                    sum = ((priceApartment * nights) * 0.65) * 0.9
                    console.log(`${sum.toFixed(2)}`);
                    break;
            }
        } else if (days > 15) {
            switch (grade) {
                case "positive":
                    sum = ((priceApartment * nights) * 0.5) * 1.25
                    console.log(`${sum.toFixed(2)}`);
                    break;
                case "negative":
                    sum = ((priceApartment * nights) * 0.5) * 0.9
                    console.log(`${sum.toFixed(2)}`);
                    break;
            }
        }
    }

    if (type === "president apartment") {
        if (days < 10) {
            switch (grade) {
                case "positive":
                    sum = ((pricePresident * nights) * 0.9) * 1.25
                    console.log(`${sum.toFixed(2)}`);
                    break;
                case "negative":
                    sum = ((pricePresident * nights) * 0.9) * 0.9
                    console.log(`${sum.toFixed(2)}`);
                    break;
            }
        } else if (days <= 15) {
            switch (grade) {
                case "positive":
                    sum = ((pricePresident * nights) * 0.85) * 1.25
                    console.log(`${sum.toFixed(2)}`);
                    break;
                case "negative":
                    sum = ((pricePresident * nights) * 0.85) * 0.9
                    console.log(`${sum.toFixed(2)}`);
                    break;
            }
        } else if (days > 15) {
            switch (grade) {
                case "positive":
                    sum = ((pricePresident * nights) * 0.8) * 1.25
                    console.log(`${sum.toFixed(2)}`);
                    break;
                case "negative":
                    sum = ((pricePresident * nights) * 0.8) * 0.9
                    console.log(`${sum.toFixed(2)}`);
                    break;
            }
        }
    }

}
skiTrip(["30",
    "president apartment",
    "negative"
])