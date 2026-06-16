function countOccurences(arr, num) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    console.log(count);
    return count;
    
}





    countOccurences([1, 2, 2, 3, 2], 2);