function movieRatings(input) {
    let moviesCount = Number(input.shift())
    let count = 0
    let showRating = 0
    let averageR = 0
    for (let i = 0; i < moviesCount; i++) {
        let name = input.shift()
        let rating = Number(input.shift())
        showRating += rating
        count++
        
    }
    let maxRating = rating.indexOf(Math.max(...rating))
        let minRating = rating.indexOf(Math.min(...rating))
   

    averageR = showRating / count
    console.log(`Average rating: ${averageR.toFixed(1)}`);
}
movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
