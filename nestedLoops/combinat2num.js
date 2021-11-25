function combination(input) {
    let start = Number(input[0])
    let end = Number(input[1])
    let goal = Number(input[2])
    let combin = 0
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combin++
            if (i + j === goal) {

                console.log(`Combination N:${combin} (${i} + ${j} = ${goal})`);
                return;
            }
        }

    }
    console.log(`${combin} combinations - neither equals ${goal}`);
}
combination(["1",
    "10",
    "5"
])