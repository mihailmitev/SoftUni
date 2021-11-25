function oscarsWeekInCinema(input) {
    let name = input[0]
    let type = input[1]
    let ticket = Number(input[2])
    let sum = 0
    if (name === "A Star Is Born") {
        switch (type) {
            case "normal":
                sum = ticket * 7.50;
                break;
            case "luxury":
                sum = ticket * 10.50;
                break;
            case "ultra luxury":
                sum = ticket * 13.50;
                break;
        }
    } else if (name === "Bohemian Rhapsody") {
        switch (type) {
            case "normal":
                sum = ticket * 7.35;
                break;
            case "luxury":
                sum = ticket * 9.45;
                break;
            case "ultra luxury":
                sum = ticket * 12.75;
                break;
        }
    } else if (name === "Green Book") {
        switch (type) {
            case "normal":
                sum = ticket * 8.15;
                break;
            case "luxury":
                sum = ticket * 10.25;
                break;
            case "ultra luxury":
                sum = ticket * 13.25;
                break;
        }
    } else if (name === "The Favourite") {
        switch (type) {
            case "normal":
                sum = ticket * 8.75;
                break;
            case "luxury":
                sum = ticket * 11.55;
                break;
            case "ultra luxury":
                sum = ticket * 13.95;
                break;
        }
    }
    console.log(`${name} -> ${sum.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"
])