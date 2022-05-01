function addAndRemove(array) {
    let newArr = []
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            newArr.push(i + 1)
        }

        if (array[i] === 'remove') {
            newArr.pop()
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])