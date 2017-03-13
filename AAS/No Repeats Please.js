
function permAlone(str){
    var permutations = getPermutations(str),
        repeats = /(.)\1/g,
        noRepeatStrings = []
        console.log("initial perumation: "); console.log(permutations);
        
    permutations.forEach(function(val, index){
        if(val.search(repeats)==-1){
            noRepeatStrings.push(val); console.log(noRepeatStrings);
        }
    })
    console.log(noRepeatStrings.length)
    return noRepeatStrings.length
}


function getPermutations(str){
    //Enclosed data to be used by the internal recursive function permutate():
    var permutations = [],  //generated permutations stored here
        nextWord = [],      //next word builds up in here     
        chars = []          //collection for each recursion level
    ;
    //---------------------
    //split words or numbers into an array of characters
    if (typeof str === 'string') chars = str.split(''); 
    else if (typeof str === 'number') {
      str = str + ""; //convert number to string
      chars = str.split('');//convert string into char array
    }
    //============TWO Declaratives========
    permutate(chars);
    return permutations;
    //===========UNDER THE HOOD===========
    function permutate(chars){ //recursive: generates the permutations
        if(chars.length === 0)permutations.push(nextWord.join(''));            
        for (var i=0; i < chars.length; i++){
            chars.push(chars.shift());  //rotate the characters
            nextWord.push(chars[0]);    //use the first char in the array            
            permutate(chars.slice(1));  //Recurse: array-less-one-char
            nextWord.pop();             //clear for nextWord (multiple pops)
        }
    }
    //--------------------------------
}//==============END of getPermutations(str)=============

permAlone("abcdefa") 

