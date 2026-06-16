function proba(words) {
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (currentWord.length > longest.length) {
            longest = currentWord;
        }
    }

    return longest;
}

console.log(proba(['cat', 'cream', 'elephant']));

