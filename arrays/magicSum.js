function magicSum(a, b) {
    for (let i = 0; i < a.length - 1; i++) {

        for (let j = i + 1; j < a.length; j++) {
            if (Number(a[i]) + Number(a[j]) === b) {
                console.log(a[i] + ' ' + a[j]);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)