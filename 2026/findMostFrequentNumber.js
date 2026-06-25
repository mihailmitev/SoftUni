function findMostFrequentNumber(arr) {
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequentNum = null;

    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentNum = num;
        }
    }

    return mostFrequentNum;
}
console.log(findMostFrequentNumber([1, 2, 2, 3, 1, 2])); 