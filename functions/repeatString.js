function repeatString(name, number) {
    let result = ''
    for (let i = 0; i < number; i++) {
        result += name
    }
    console.log(result);
}
repeatString('abc', 3)