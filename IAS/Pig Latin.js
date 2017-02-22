// regex consonants /^[aeiou]/
// str.match(regex) can turn all consonants into an array

/* 
If the first letter is vowel just push("way")
Else str.search(vowels), split at that index, add that to the end then add ay
*/
function translatePigLatin(str){
    if(str.search(/[aeiou]/)==0){
        console.log(str+"way");
        return str+"way";
    }else{
    
    consonants = str.substr(0,str.search(/[aeiou]/));
    start = str.substr(str.search(/[aeiou]/));
    console.log(consonants);
    console.log(start);
    console.log( start + consonants +"ay");
    return start + consonants +"ay";

    }

}

translatePigLatin("bbcaac");