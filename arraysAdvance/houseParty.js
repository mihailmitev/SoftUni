function houseParty(list) {
    let newArr = []
    let guestNames = " "
    for (let i = 0; i < list.length; i++) {
        let line = list[i].split(' ')
        let name = line[0]
        let command = line[2]
        if (command !== 'not') {
            if (newArr.includes(name) === true) {
                console.log(`${name} is already in the list!`);
                continue;
            }
            newArr.push(name)

        } else {
            if (newArr.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            newArr = newArr.filter(x => x != name);
        }
    }
    console.log(newArr.join(' \n'));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])