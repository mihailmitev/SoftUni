function renovation(input) {
    let index = 0
    let height = Number(input[index])
    index++
    let width = Number(input[index])
    index++
    let noNeedPaint = Number(input[index])
    index++
    let allPaint = (height * width * 4)
    let noallPaint = allPaint - (allPaint * noNeedPaint / 100)

    let sum = 0
    for (i = noallPaint; i < allPaint; i++) {
        let paint = Number(input[index])
        index++
       sum += paint
        console.log(paint);
    }

}
renovation(["3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"
])