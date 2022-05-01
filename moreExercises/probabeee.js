function strike(input) {
    let health = Number(input.shift())
    let count = 0

    for (i = 0; i < input.length; i++) {
        if (input[i] !== "End of battle") {
            let shoot = Number(input[i])
            health -= shoot
        }



        if (count % 3 === 0) {
            health += count
        }

        if (health < 0) {
           
            console.log(`Not enough energy! Game ends with ${count} won battles and ${health} energy`)
        }
        if (input[i] === "End of battle") {
            console.log(`Won battles: ${count}. Energy left: ${health}`)
        }
        count++
    }


}
strike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
])
strike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
])