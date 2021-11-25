function cinemaTickets(input) {
    let index = 0
    let command = input[index]
    index++
    let standart = 0
    let kid = 0
    let student = 0
    let total = 0

    while (command !== "Finish") {
        let name = command
        let freeSpace = Number(input[index])
        index++
        let ticketType = input[index]
        index++
        let ticketCounter = 0
        while (ticketType !== "End") {
            ticketCounter++
            switch (ticketType) {
                case "standard":
                    standart++;
                    break;
                case "kid":
                    kid++;
                    break;
                case "student":
                    student++;
                    break;

            }

            if (ticketCounter >= freeSpace) {
                break;
            }
            ticketType = input[index]
            index++
        }
        total += ticketCounter
        let res = ticketCounter / freeSpace * 100
        console.log(`${name} - ${res.toFixed(2)}% full.`);
        command = input[index]
        index++
    }
    let studentTicket = student / total * 100
    let standartTickets = standart / total * 100
    let kidsTicket = kid / total * 100
    console.log(`Total tickets: ${total}`);
    console.log(`${studentTicket.toFixed(2)}% student tickets.`);
    console.log(`${standartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicket.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])