function catWalking(input) {
    let minWalking = Number(input[0])
    let numWalk = Number(input[1])
    let calories = Number(input[2])
    let totalCatWalkings = minWalking * numWalk
    let burnedCalories = totalCatWalkings * 5
    if (burnedCalories >= calories / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }
}
catWalking(["40",
    "2",
    "300"
])