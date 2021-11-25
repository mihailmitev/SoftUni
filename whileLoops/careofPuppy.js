function careofPuppy(input) {
    let remainingFood = Number(input.shift()) * 1000;

    let command;
    while ((command = input.shift()) !== 'Adopted') {
        let eaten = Number(command);
        remainingFood -= eaten;
    }
    if (remainingFood >= 0) {
        console.log(`Food is enough! Leftovers: ${remainingFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${-remainingFood} grams more.`);
    }
}
careofPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
])