function charactersInRange(first, second) {
    let min = first.charCodeAt(0)
    let max = second.charCodeAt(0)
    let firstChar = first.charCodeAt(0)
    let secondChar = second.charCodeAt(0)
    if (firstChar > secondChar) {
        min = secondChar
        max = firstChar
    }
    let result = '';
    for (let i = min + 1; i < max; i++) {
        let charachter = String.fromCharCode(i)
        result += charachter + ' ';
    }
    return result;

}
let result = charactersInRange('C',
'#'
)
console.log(result);