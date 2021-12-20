function firstAndLastKNumbers(arr) {
    let k = arr.shift()
    let forward = arr.slice(0, k)
    let backwards = arr.slice(arr.length - k)
    console.log(forward.join(' '));
    console.log(backwards.join(' '));
}
firstAndLastKNumbers([2,
    7, 8, 9
])