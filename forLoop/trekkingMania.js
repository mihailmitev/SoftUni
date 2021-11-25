function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index])
    index++
    let sum = 0
    let musala = 0
    let montblan = 0
    let kilimadjaro = 0
    let k2 = 0
    let everest = 0
    let musalaTotal = 0
    let montblanTotal = 0
    let kilimadjaroTotal = 0
    let k2Total = 0
    let everestTotal = 0

    for (let i = 0; i < groups; i++) {
        let people = Number(input[index])
        index++
        if (people <= 5) {
            musala += people

        } else if (people >= 6 && people <= 12) {
            montblan += people

        } else if (people >= 13 && people <= 25) {
            kilimadjaro += people

        } else if (people >= 26 && people <= 40) {
            k2 += people
        } else if (people >= 41) {
            everest += people
        }
        sum += people
    }

    musalaTotal = musala / sum * 100
    montblanTotal = montblan / sum * 100
    kilimadjaroTotal = kilimadjaro / sum * 100
    k2Total = k2 / sum * 100
    everestTotal = everest / sum * 100
    console.log(`${musalaTotal.toFixed(2)}%`);
    console.log(`${montblanTotal.toFixed(2)}%`);
    console.log(`${kilimadjaroTotal.toFixed(2)}%`);
    console.log(`${k2Total.toFixed(2)}%`);
    console.log(`${everestTotal.toFixed(2)}%`);
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
])