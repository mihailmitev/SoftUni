function logistics(input) {
    let index = 0
    let numCargo = Number(input[index])
    index++
    let bus = 0
    let truck = 0
    let train = 0
    let cargo = 0
    let sum = 0
    let percentBus = 0
    let percentTruck = 0
    let percentTrain = 0
    for (let i = 1; i <= numCargo; i++) {
        let singleCargo = Number(input[index])
        index++
        if (singleCargo <= 3) {
            cargo += singleCargo
            bus += singleCargo

        } else if (singleCargo >= 4 && singleCargo <= 11) {
            cargo += singleCargo
            truck += singleCargo
        } else {
            cargo += singleCargo
            train += singleCargo
        }
    }
    sum = ((bus * 200) + (truck * 175) + (train * 120)) / cargo
    percentBus = bus / cargo * 100
    percentTruck = truck / cargo * 100
    percentTrain = train / cargo * 100
    console.log(sum.toFixed(2));
    console.log(`${percentBus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}
logistics(["4",
    "1",
    "5",
    "16",
    "3"
])