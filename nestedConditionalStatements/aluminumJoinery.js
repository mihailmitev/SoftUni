function aluminumJoinery(input) {
    let numOrder = Number(input[0])
    let type = input[1]
    let deliveryType = input[2]
    let elementPrice = 0
    let finalPrice = 0
    switch (type) {
        case "90X130":
            elementPrice = 110;
            if (numOrder > 30 && numOrder <= 60) {
                finalPrice = (numOrder * elementPrice) * 0.95
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else if (numOrder > 60 && numOrder <= 99) {
                finalPrice = (numOrder * elementPrice) * 0.92
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else if (numOrder > 99) {
                finalPrice = ((numOrder * elementPrice) * 0.92)
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = (finalPrice + 60) * 0.96;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice * 0.96
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;

                }
            } else if (numOrder >= 10 && numOrder <= 30) {
                finalPrice = (numOrder * elementPrice)
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else {
                console.log(`Invalid order`);
            }
            break;
        case "100X150":
            elementPrice = 140;
            if (numOrder > 40 && numOrder <= 80) {
                finalPrice = (numOrder * elementPrice) * 0.94
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else if (numOrder > 80 && numOrder <= 99) {
                finalPrice = (numOrder * elementPrice) * 0.90
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else if (numOrder > 99) {
                finalPrice = ((numOrder * elementPrice) * 0.90)
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = (finalPrice + 60) * 0.96;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice * 0.96
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;

                }
            } else if (numOrder >= 10 && numOrder <= 40) {
                finalPrice = (numOrder * elementPrice)
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else {
                console.log(`Invalid order`);
            }
            break;

        case "130X180":
            elementPrice = 190;
            if (numOrder > 20 && numOrder <= 50) {
                finalPrice = (numOrder * elementPrice) * 0.93
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else if (numOrder > 50 && numOrder <= 99) {
                finalPrice = (numOrder * elementPrice) * 0.88
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else if (numOrder > 99) {
                finalPrice = ((numOrder * elementPrice) * 0.88)
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = (finalPrice + 60) * 0.96;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice * 0.96
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;

                }
            } else if (numOrder >= 10 && numOrder <= 20) {
                finalPrice = (numOrder * elementPrice)
                switch (deliveryType) {
                    case "With delivery":
                        finalPrice = finalPrice + 60;
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                    case "Without delivery":
                        finalPrice = finalPrice
                        console.log(`${finalPrice.toFixed(2)} BGN`);
                        break;
                }
            } else {
                console.log(`Invalid order`);
            } break;


            case "200X300":
                elementPrice = 250;
                if (numOrder > 25 && numOrder <= 50) {
                    finalPrice = (numOrder * elementPrice) * 0.91
                    switch (deliveryType) {
                        case "With delivery":
                            finalPrice = finalPrice + 60;
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;
                        case "Without delivery":
                            finalPrice = finalPrice
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;
                    }
                } else if (numOrder > 50 && numOrder <= 99) {
                    finalPrice = (numOrder * elementPrice) * 0.86
                    switch (deliveryType) {
                        case "With delivery":
                            finalPrice = finalPrice + 60;
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;
                        case "Without delivery":
                            finalPrice = finalPrice
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;
                    }
                } else if (numOrder > 99) {
                    finalPrice = ((numOrder * elementPrice) * 0.86)
                    switch (deliveryType) {
                        case "With delivery":
                            finalPrice = (finalPrice + 60) * 0.96;
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;
                        case "Without delivery":
                            finalPrice = finalPrice * 0.96
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;

                    }
                } else if (numOrder >= 10 && numOrder <= 25) {
                    finalPrice = (numOrder * elementPrice)
                    switch (deliveryType) {
                        case "With delivery":
                            finalPrice = finalPrice + 60;
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;
                        case "Without delivery":
                            finalPrice = finalPrice
                            console.log(`${finalPrice.toFixed(2)} BGN`);
                            break;
                    }
                } else {
                    console.log(`Invalid order`);
                } break;


    } 
}




aluminumJoinery(["105",
    "100X150",
    "With delivery"
])