function equalSums(list) {
    let hasFoundResult = false
    for (let i = 0; i < list.length; i++) {
        let leftSum = 0
        let rightSum = 0
        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            let currentNumber = list[leftIndex]
            leftSum += currentNumber
        }
        for (let rightIndex = i + 1; rightIndex < list.length; rightIndex++) {
            let currentNumber = list[rightIndex]
            rightSum += currentNumber
        }
        if (leftSum === rightSum) {
            console.log(i);
            hasFoundResult = true;
            break;
        }
    }
    if(hasFoundResult === false){
        console.log('no');
    }
}
equalSums([1, 2, 3, 3])