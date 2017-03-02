/*
Create dictionary
Convert number to string
Split the string
Based on index location conver the digit to its corresponding power of 10
*/
function convertToRoman(num){
    var conversion ={
        "1":"I",
        "2":"II",
        "3":"III",
        "4":"IV",
        "5":"V",
        "6":"VI",
        "7":"VII",
        "8":"VIII",
        "9":"IX",
        "10":"X",
        "20":"XX",
        "30":"XXX",
        "40":"XL",
        "50":"L",
        "60":"LX",
        "70":"LXX",
        "80":"LXXX",
        "90":"XC",
        "100":"C",
        "200":"CC",
        "300":"CCC",
        "400":"CD",
        "500":"D",
        "600":"DC",
        "700":"DCC",
        "800":"DCCC",
        "900":"CM",
        "1000":"M",
        "2000":"MM",
        "3000":"MMM"
    };
    var digits = num.toString().split("").reverse();
    var roman = [];
    console.log(digits);
    for (var index = 0; index < digits.length; index++) {
        console.log("index outer: "+index);

        for (var count = 1; count <= index; count++) {
            console.log("count: "+count);
            console.log("index: " +index);
            digits[index]=digits[index]+"0";
                      
        }
        console.log(digits);
    }
    digits = digits.reverse().forEach(function(val,index){
        roman[index]=conversion[val];
    })
    console.log(roman);
    console.log(roman.join(""));
    return roman.join("")
            
            
}

convertToRoman(2);