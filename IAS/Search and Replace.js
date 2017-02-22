/*
Use index of to find where the word is located in string. Make sure to do index to find all of the locations

*/

function myReplace(str, before, after){
    capIndex = before.search(/[A-Z]/);
    console.log(capIndex);
    if(capIndex>=0){
        console.log("In cap loop");
        AFTER = after.replaceAt(capIndex, after[0].toUpperCase());
        newStr =str.replace(before, AFTER);
        return newStr;
    }
     newStr =str.replace(before, after);
        return newStr;
    
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

console.log(myReplace("Let us go to the store", "store", "mall"));