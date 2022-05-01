function bonus(list) {
    let studentsNumber = Number(list.shift())
    let lecturesTotal = Number(list.shift())
    let additionalBonus = Number(list.shift())
    let newList = list.map(Number)
    let result = 0
    let finalArr = []
    for (let i = 0; i < newList.length; i++) {
        result = newList[i] / lecturesTotal * (5 + additionalBonus)
        finalArr.push(result)
    }
    console.log(`Max Bonus: ${Math.max(...finalArr).toFixed(0)}.`);
    console.log(`The student has attended ${Math.max(...list)} lectures.`);

}
bonus([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])