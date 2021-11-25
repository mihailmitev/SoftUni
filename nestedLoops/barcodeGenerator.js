function barcodeGenerator(input) {
    let start = input[0]
    let end = input[1]
    let result = ""
    for (let i = start.charAt(0); i <= end.charAt(0); i++) {
        for (let j = start.charAt(1); j <= end.charAt(1); j++) {
            for (let k = start.charAt(2); k <= end.charAt(2); k++) {
                for (let p = start.charAt(3); p <= end.charAt(3); p++) {
                    if (i % 2 === 1 && j % 2 === 1 && k % 2 === 1 && p % 2 === 1) {
                        result += "" + i + j + k + p + " "
                    }
                }
            }
        }
    }
    console.log(result);
}
barcodeGenerator(["2345",
    "6789"
])