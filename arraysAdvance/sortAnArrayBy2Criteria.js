function sort(input) {
    input.sort((a, b) => {
        let first = a.length - b.length
        let second = a.localeCompare(b)
        return first || second
    })
    console.log(input.join('\n'));

}
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"])