function fitnessCard(input) {
    let funds = Number(input[0])
    let gender = input[1]
    let age = Number(input[2])
    let sport = input[3]
    let price = 0
    if (gender === "m") {
        switch (sport) {
            case "Gym":
                price = 43
                if (funds => 43 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 43) {
                    console.log(`You don't have enough money! You need ${(43 - funds).toFixed(2)} more.`);
                }
                break;
            case "Boxing":
                price = 41
                if (funds => 41 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 41) {
                    console.log(`You don't have enough money! You need ${(43 - funds).toFixed(2)} more.`);
                }
                break;
            case "Yoga":
                price = 45
                if (funds => 45 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 45) {
                    console.log(`You don't have enough money! You need ${45 - funds} more.`);
                }
                break;
            case "Zumba":
                price = 34
                if (funds => 34 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 34) {
                    console.log(`You don't have enough money! You need ${34 - funds} more.`);
                }
                break;
            case "Dances":
                price = 51
                if (funds => 51 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 51) {
                    console.log(`You don't have enough money! You need ${51 - funds} more.`);
                }
                break;
            case "Pilates":
                price = 39
                if (funds => 39 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 39) {
                    console.log(`You don't have enough money! You need ${39 - funds} more.`);
                }
                break;
        }
    } else if (gender === "f") {
        switch (sport) {
            case "Gym":
                price = 35
                if (funds => 35 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 35) {
                    console.log(`You don't have enough money! You need ${35 - funds} more.`);
                }
                break;
            case "Boxing":
                price = 37
                if (funds => 37 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 37) {
                    console.log(`You don't have enough money! You need ${37 - funds} more.`);
                }
                break;
            case "Yoga":
                price = 42
                if (funds => 42 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 42) {
                    console.log(`You don't have enough money! You need ${42 - funds} more.`);
                }
                break;
            case "Zumba":
                price = 31
                if (funds => 31 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 31) {
                    console.log(`You don't have enough money! You need ${31 - funds} more.`);
                }
                break;
            case "Dances":
                price = 53
                if (funds => 53 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 53) {
                    console.log(`You don't have enough money! You need ${53 - funds} more.`);
                }
                break;
            case "Pilates":
                price = 57
                if (funds => 57 && age > 19) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (age < 19 && (funds => (price * 0.8))) {
                    console.log(`You purchased a 1 month pass for ${sport}.`);
                } else if (funds < 57) {
                    console.log(`You don't have enough money! You need ${57 - funds} more.`);
                }
                break;

        }
    }
}
fitnessCard(["20",
    "f",
    "15",
    "Yoga"
])