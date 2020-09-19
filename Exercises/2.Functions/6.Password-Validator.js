function validatePassword(password) {
    function validateLength(password) {
        return password.length >= 6 && password.length <= 10;
    }
    function validateContent(password) {
        let validContent = true;
        for (let i = 0; i < password.length; i++) {
            let ascicode = password[i].charCodeAt(0);
            if ((ascicode >= 48 && ascicode <= 57) ||
                (ascicode >= 65 && ascicode < 90) ||
                (ascicode >= 97 && ascicode <= 122)) {
                continue;
            }
            validContent = false;
            break;
        }
        return validContent;
    }
    function validateDigits(password) {
        let digitCoun = 0;
        for (let i = 0; i < password.length; i++) {
            let ascicode = password[i].charCodeAt(0);
            if (ascicode >= 48 && ascicode <= 57) {
                digitCoun++;
            }  
        }
        return digitCoun >= 2;
    }
 
 
    let result = [];
    if (validateLength(password) && validateContent(password) && validateDigits(password)) {
        result.push('Password is valid');
    } else {
        if (!validateLength(password)) {
            result.push('Password must be between 6 and 10 characters')
        }
        if (!validateContent(password)) {
            result.push('Password must consist only of letters and digits');
        }
        if (!validateDigits(password)) {
            result.push('Password must have at least 2 digits');
        }
    }
    console.log(result.join('\n'));
}

validatePassword('logIn')

