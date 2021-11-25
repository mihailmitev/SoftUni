function combination(input) {
    let goalN = Number(input[0])
    let combinations = 0
    for (let i = 0; i <= goalN; i++) {
        for (let j = 0; j <= goalN; j++) {
            for (let k = 0; k <= goalN; k++) {
                if (i + j + k === goalN) {
                    combinations++
                }
               
            }
           
        }
       
    }
    console.log(combinations);
}
combination(["25"])