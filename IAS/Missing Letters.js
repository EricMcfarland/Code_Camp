//take in string. return missing letter that would complete that section of the alphabet
//grab first and last letters. make a regex using regex= new RegExp("["+firstChar+"-"+lastChar+"]")

function fearNotLetter (str){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var letters= alphabet.split("");
    var splitStr= str.split("");
    var firstChar = str[0];
    var lastChar = str[str.length -1];
    console.log(firstChar + " "+lastChar);
    var frontIndex = alphabet.indexOf(firstChar);
    console.log(frontIndex);
    var backIndex = alphabet.indexOf(lastChar);
    console.log(backIndex);
    var completeLetters = alphabet.substring(frontIndex,backIndex+1).split("");
    console.log(completeLetters);
    missingCharacter=[];
    completeLetters.forEach(function(value, index){
        if(value==this[index]){
            console.log(value);
        }else{
            if(missingCharacter==""){
            console.log(value);
            missingCharacter=value;
            }
        }
    }, splitStr); 
    console.log("missingCharacter "+missingCharacter);
    if(missingCharacter==""){
        return undefined;
    }
    return missingCharacter;
}

fearNotLetter("abce");