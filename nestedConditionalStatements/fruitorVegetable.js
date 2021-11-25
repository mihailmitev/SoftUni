function fruitorVegetable(input) {
    let item = input[0]
    switch (item) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
        case "vegetable":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}
fruitorVegetable(["banana"])
//banana, apple, kiwi, cherry, lemon и grapes fruit
//:  tomato, cucumber, pepper и carrot vegetable
//unknown