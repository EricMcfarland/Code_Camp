//assume properly formated input
//take a string of 0's and 1's split by spaces and convert them to letters
//return string

function binaryAgent(str){
    chars = str.split(" ");
    console.log(chars);
    letters=[];
    chars.forEach(function(val,index){
        letters.push(parseInt(val,2).toString(10));
        console.log(letters);

    })
    phrase = String.fromCharCode.apply(null,letters);
    console.log(phrase);
    return phrase

}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");