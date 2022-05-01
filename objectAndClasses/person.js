function cratePerson(firstName, lastName, age) {
    let person = {
        firstName : firstName,
        lastName: lastName,
        age: age
    }
    return person;
}

console.log(cratePerson("Peter", 
"Pan",
"20"
));