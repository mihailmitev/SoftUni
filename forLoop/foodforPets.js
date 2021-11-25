function petFood(input){
    let days = Number(input[0]);
    let allFoodAmount = Number(input[1]);
    let allFoodEaten = 0;
    let daysEating = 0;
    let dailyFood = 0;
    let dogAte = 0;
    let catAte = 0;
    let biscuit = 0;
 
 
    for (let i = 2; i < input.length; i++){
        let dogDayFood = Number(input[i++]);
        let catDayFood = Number(input[i]);
        dailyFood = dogDayFood + catDayFood;
        daysEating++;
 
        if (daysEating % 3 === 0){
            biscuit += (dailyFood) * 0.1;
        }
 
        dogAte += dogDayFood;
        catAte += catDayFood;
        allFoodEaten = dogAte + catAte;
    }
 
   
    console.log(`Total eaten biscuits: ${Math.round(biscuit)}gr.`)
   
    let percentOfFoodEaten = (allFoodEaten / allFoodAmount) * 100;
    console.log(`${percentOfFoodEaten.toFixed(2)}% of the food has been eaten.`);
 
    let dogPercent = (dogAte / allFoodEaten) * 100;
    console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
 
    let catPercent = (catAte / allFoodEaten) * 100;
    console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);



}
petFood(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"
])