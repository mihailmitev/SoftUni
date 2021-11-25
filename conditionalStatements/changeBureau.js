function changeBureau(input) {
    let numBitcoins = Number(input[0])
    let numChineseUans = Number(input[1])
    let commision = Number(input[2])
    let bitcoinPrice = 1168 * numBitcoins
    let uanPrice = numChineseUans * 0.15
    let dolarPrice = uanPrice * 1.76
    let euro = (bitcoinPrice + dolarPrice) / 1.95
    let sumComission = (euro * commision) / 100
    let result = euro - sumComission
    console.log(result.toFixed(2));
}
changeBureau(["20",
"5678",
"2.4"])
