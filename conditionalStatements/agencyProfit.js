function agencyProfit(input) {
    let companyName = input[0]
    let adultTickets = Number(input[1])
    let kidsTickets = Number(input[2])
    let adultTicketPrice = Number(input[3])
    let taxPrice = Number(input[4])
    let kidsTicketPrice = adultTicketPrice * 0.3
    let finalAdultPrice = adultTicketPrice + taxPrice
    let finalKidsPrice = kidsTicketPrice +  taxPrice
    let sumOfTickets = adultTickets * finalAdultPrice + kidsTickets * finalKidsPrice
 let companyProfit = sumOfTickets * 0.2
    console.log(`The profit of your agency from ${companyName} tickets is ${companyProfit.toFixed(2)} lv.`);
}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])




