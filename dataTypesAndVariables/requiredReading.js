function reading(pages, pagesHour, days) {
   // Total time to read the book: 212 pages / 20 pages per hour = 10.6 hours
   // Required hours per day: 10.6 hours / 2 days = 5.3 hours per day 
    let totalTime = pages / pagesHour
    let requiredHours = totalTime / days
    console.log(requiredHours);

}
reading(212,
    20 ,
    2 
    )