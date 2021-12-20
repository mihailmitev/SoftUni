function palindromeIntegers(list){
    for(let number of list){
        let numberAsString = number.toString()
        let reverseNumberAsString = numberAsString.split('').reverse().join('')
        if(numberAsString === reverseNumberAsString){
            console.log(true);
        }else {
            console.log(false);
        }
    }
}
palindromeIntegers([123,323,421,121])