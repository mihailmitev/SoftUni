function travelAgency(input) {
    let town = input[0]
    let package = input[1]
    let discount = input[2]
    let days = Number(input[3])
    let sum = 0

    if (town === "Bansko" && discount === "yes" && days >= 1 || town === "Borovets" && discount === "yes" && days >= 1) {
        switch (package) {
            case "withEquipment":
                sum = (days * 100) * 0.9;
                break;
            case "noEquipment":
                sum = (days * 80) * 0.95;
                break;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
    } else if (town === "Varna" && discount === "yes" && days >= 1 || town === "Burgas" && discount === "yes" && days >= 1) {
        switch (package) {
            case "withBreakfast":
                sum = (days * 130) * 0.88;
                break;
            case "noBreakfast":
                sum = (days * 100) * 0.93;
                break;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
    } else if (town === "Bansko" && discount === "no" && days >= 1 || town === "Borovets" && discount === "no" && days >= 1) {
        switch (package) {
            case "withEquipment":
                sum = days * 100;
                break;
            case "noEquipment":
                sum = days * 80;
                break;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
    } else if (town === "Varna" && discount === "no" && days >= 1 || town === "Burgas" && discount === "no" && days >= 1) {
        switch (package) {
            case "withBreakfast":
                sum = days * 130;
                break;
            case "noBreakfast":
                sum = days * 100;
                break;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);




    } else if (days < 1) {
        console.log(`Days must be positive number!`);
    } else if (town !== "Varna" || town !== "Burgas" || town !== "Bansko" || town !== "Borovets" ||
        package !== "withBreakfast" || package !== "noBreakfast" || package !== "withEquipment" || package !== "noEquipment") {
        console.log(`Invalid input!`);
    }



}
travelAgency(["Varna",
    "withBreakfast",
    "no",
    "0"
])