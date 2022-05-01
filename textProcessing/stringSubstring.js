function solve(wordword, sentence) {
    let words = sentence.split(' ')
    for (const word of words) {
        if (wordword.toLowerCase() === word.toLowerCase()) {
            console.log(wordword);
            return;
        }
    }
    console.log(`${wordword} not found!`);
}
solve('javascript',
    'JavaScript is the best programming language'
)