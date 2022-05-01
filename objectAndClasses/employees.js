function employees(list) {
    for (let employe of list) {
        let employeedata = {
            name: employe,
            personalNumber: employe.length
        }
        console.log(`Name: ${employeedata.name} -- Personal Number: ${employeedata.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])