function searchForAnumber(array, adjustments) {
    let takeNums = adjustments[0]
    let numsTodelete = adjustments[1]
    let searchNumber = adjustments[2]
    let count = 0
    let arr = array.slice(0, takeNums)
    arr.splice(0, numsTodelete)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchNumber) {
            count++
        }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}
searchForAnumber([5, 2, 3, 4, 1, 6], [5, 2, 3])


/*function solve(nums,criteria){
    let count = 0;
    let el = criteria[2];
    let arr = nums.slice(0,criteria[0]);
    arr.splice(0,criteria[1]);
    for(let i = 0;i<arr.length;i++){
  
        if(arr[i] === (el)){
            count++;
         }
    }
console.log(`Number ${el} occurs ${count} times.`)
}
*/