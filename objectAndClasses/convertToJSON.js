function convertToJSON(firstName, lastNmae, hair) {
    let result = {
        name: firstName,
        lastName: lastNmae,
        hairColor: hair
    }
    console.log(JSON.stringify(result));
}
convertToJSON('George',
    'Jones',
    'Brown'
)