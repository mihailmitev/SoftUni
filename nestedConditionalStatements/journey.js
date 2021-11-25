function journey(input) {
    let budget = Number(input[0])
    let season = input[1]
    let sum = 0
    let destination;
    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            let how = "Camp"
            sum = budget * 0.3
            console.log(`Somewhere in ${destination}`);
            console.log(`${how} - ${sum.toFixed(2)}`);
        } else if (season === "winter") {
            let how = "Hotel"
            sum = budget * 0.7
            console.log(`Somewhere in ${destination}`);
            console.log(`${how} - ${sum.toFixed(2)}`);
        }

    }
    if (budget > 100 && budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            let how = "Camp"
            sum = budget * 0.4
            console.log(`Somewhere in ${destination}`);
            console.log(`${how} - ${sum.toFixed(2)}`);
        } else if (season === "winter") {
            let how = "Hotel"
            sum = budget * 0.8
            console.log(`Somewhere in ${destination}`);
            console.log(`${how} - ${sum.toFixed(2)}`);
        }
    }
    if (budget > 1000) {
        destination = "Europe"
       
            let how = "Hotel"
            sum = budget * 0.9
            console.log(`Somewhere in ${destination}`);
            console.log(`${how} - ${sum.toFixed(2)}`);
        }
    

}
journey(["1500", "summer"])