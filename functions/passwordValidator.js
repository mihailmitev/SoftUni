function passwordValidator(password) {
    function isLenght(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function consistOnly(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)) {
                return false
            }
        }
        return true;
    }

    function twoDigits(string) {
        let counter = 0
        for (let char of string) {
            let charCode = char.charCodeAt(0)
            if (charCode >= 48 && charCode <= 57) {
                counter++
            }
        }

        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isLengthValid = isLenght(password)
    let containsLetters = consistOnly(password)
    let containAtl = twoDigits(password)
    if (isLengthValid && containsLetters && containAtl) {
        console.log('Password is valid');
        return;
    }
    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!containsLetters) {
        console.log('Password must consist only of letters and digits');
    }
    if (!containAtl) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('MyPass123')