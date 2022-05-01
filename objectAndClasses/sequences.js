function solve(data) {
  

    let sorted = data.map(x => JSON.parse(x).sort((a, b) => b - a));
    let r = '';
 
    let uniquesAsStr = [];
    for (let arr of sorted) {
        if (!uniquesAsStr.includes(JSON.stringify(arr))) {
            uniquesAsStr.push(JSON.stringify(arr))
        }
    }
    let uniquesAsArr = uniquesAsStr.map(e => JSON.parse(e)).sort((a, b) => a.length - b.length)

    for (const arr of uniquesAsArr) {
        r += `[${arr.join(', ')}]\n`;
    }
    return r;
}
console.log(solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
));