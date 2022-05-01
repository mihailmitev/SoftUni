function solve(text, word) {
    let tokens = text.split(' ')
   
    // for (let token of tokens) {
    //     if (token == word) {
    //         count++
    //     }
    // }
    let count = tokens.filter(x => x == word)
    console.log(count.length);
}
solve('This is a word and it also is a sentence',
    'is'
)