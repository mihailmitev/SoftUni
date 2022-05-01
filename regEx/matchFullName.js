function solve(input) {
    let pattern = /\b[A-Z]([a-z]+) [A-Z]([a-z]+)\b/g
    let valid = []
    while ((validName = pattern.exec(input)) != null) {
        valid.push(validName[0])
    }
    console.log(valid.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")