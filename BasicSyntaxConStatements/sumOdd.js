function sum(n) {
    let sm = 0
    let num = 1
    for (let i = 0; i < n; i++) {
        console.log(num);
        sm += num
        num += 2
    }
    console.log(`Sum: ${sm}`);

}
sum(5)