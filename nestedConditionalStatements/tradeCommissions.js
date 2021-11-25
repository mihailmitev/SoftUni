function tradeCommissions(input) {
    let town = input[0]
    let sales = Number(input[1])
    let comission = 0
    switch (town) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                comission = sales - (sales * 0.95)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 500 && sales <= 1000) {
                comission = sales - (sales * 0.93)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 1000 && sales <= 10000) {
                comission = sales - (sales * 0.92)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 10000) {
                comission = sales - (sales * 0.88)
                console.log(`${comission.toFixed(2)}`);
            } else {
                console.log("error");
            }
            break;

        case "Varna":
            if (sales >= 0 && sales <= 500) {
                comission = sales - (sales * 0.955)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 500 && sales <= 1000) {
                comission = sales - (sales * 0.925)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 1000 && sales <= 10000) {
                comission = sales - (sales * 0.90)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 10000) {
                comission = sales - (sales * 0.87)
                console.log(`${comission.toFixed(2)}`);
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                comission = sales - (sales * 0.945)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 500 && sales <= 1000) {
                comission = sales - (sales * 0.92)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 1000 && sales <= 10000) {
                comission = sales - (sales * 0.88)
                console.log(`${comission.toFixed(2)}`);
            } else if (sales > 10000) {
                comission = sales - (sales * 0.855)
                console.log(`${comission.toFixed(2)}`);
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
}
tradeCommissions(["Kaspichan",
    "-50"
])