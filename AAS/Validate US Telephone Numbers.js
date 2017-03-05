//return true if the str input is a valid 10 digit phone number. A country code is valid as long as it is 1
//The only valid non-numeric values are: 
//  -the pair () surrounding the first 3 number segment
//  -spaces (if in 3 3 4 format?)
//  -dashes (if between 3 3 4 format?)
//
// Valid formats:
// 1) 10 numbers in a row: XXXXXXXXXX
// 2) 10 numbers in 3 3 4: XXX XXX XXXX
// 3) 10 numebrs w/ country code: 1 XXX XXX XXXX
// 4) 10 numbers w first 3 (): (XXX) XXX XXXX
// 5) 10 numbers w dash sep: XXX-XXX-XXXX
// 6) 3+4 : 1 (XXX) XXX XXXX
// 7) 4+5 : (XXX) XXX-XXXX
// 8) 3+4+5: 1 (XXX) XXX-XXXX

//plan: Count if 11 numbers exists using str.match(re).length, if true then check if first number is 1, if not then false, if so compare to other valids
// after 11 count, then count if has 10 numbers: true then compare to other valids, false return false. 
function telephoneCheck(str) {
    var valid = false;
    var validFormats = [/^\d{10}/, /([1|\s]|^)\d{3}\s\d{3}\s\d{4}/,  /([1|\s]|^)\(\d{3}\)\s\d{3}\s\d{4}/, /([1|\s]|^)\d{3}\-\d{3}\-\d{4}/, /([1|\s]|^)\(\d{3}\)\s\d{3}\-\d{4}/,/([1|\s]|^)\(\d{3}\)\d{3}\s\d{4}/,/([1|\s]|^)\(\d{3}\)\d{3}\-\d{4}/ ];

    console.log("length: " + str.match(/\d/g).length);//
    //console.log("valid: " + checkIfValid(str, validFormats));
    if (str.match(/\d/g).length <= 11) {
        console.log("location of first non digit: "+str.search(/\D/));
        console.log("first non digit is: "+str.match(/\D/));
        
         if (str[0] == 1 ) {
            valid = checkIfValid(str, validFormats);
            console.log(valid);
            console.log("country code string");

        } else if (str.match(/\d/g).length == 10) {
            
            console.log("just 10 digit string");
            valid = checkIfValid(str, validFormats);
            console.log(valid);
        }
    } 
    console.log(valid);
    return valid;
}
function checkIfValid(str, validFormats) {
    var valid = false;
    validFormats.forEach(function (val) {
        console.log(str.search(val));
        
        if (str.search(val) >= 0) {
            console.log("check is true")
            valid = true;
        }
    });
    console.log("returned value: "+valid);
    return valid;
}
telephoneCheck("555-555-5555")