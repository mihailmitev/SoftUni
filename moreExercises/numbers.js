function numbers(array) {
    let setMyArr = array.split(' ')
    let newArray = setMyArr.map(Number)
    let sum = 0
    let average = 0
    let count = 0
    let finalArray = []
    for (let i = 0; i < newArray.length; i++) {
        sum += newArray[i]
        count++
    }
    average = sum / count
    for (let i = 0; i < newArray.length; i++) {
        if (average < newArray[i]) {
            finalArray.push(newArray[i])
        }
    }
    if (finalArray[0] > 0) {
        let size = 5
        let items = 0
        finalArray.sort().reverse()
        items = finalArray.slice(0, size)
        console.log(items.join(' '));

    } else if (finalArray[0] < 0) {
        let size = 5
        let items = 0
        finalArray.sort()
        items = finalArray.slice(0, size)
        console.log(items.join(' '));

    } else if (finalArray.length = 1) {
        console.log(`No`);
    }

}
numbers('-1 -2 -3 -4 -5 -6')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('10 20 30 40 50')
numbers('1')