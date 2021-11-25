function club(input) {
    let index = 0
    let budget = Number(input[index])
    index++
    let cocktail = input[index]
    index++
  
    
    
    let sum = 0
    let sum1 = 0
    let total = 0
    for (i = 0; i <= cocktail.length; i++) {
        let numCocktails = Number(input[index])
    index++
        sum = cocktail.length * numCocktails

    }
 console.log(sum);   
}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"
])

