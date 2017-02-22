//Convert the special characters &, <, >,", and ' to their corresponding HTML URL equivalent so a string could be passed as a URL

//use regex and string.replace

//create a dict using new Regex methods. then pass 
function convertHTML(str){
    var lexicon ={
        "[": "[",
        "'": "&apos;",
        "&": "&amp;",
        "]": "]",
        "<": "&lt;",
        ">": "&gt;",
        '"':  "&quot;"
    };
   

    re = new RegExp(Object.keys(lexicon).join("|"),"gi");
    console.log(lexicon.keys);
    console.log(re);
    str = str.replace(re, function(matched){
        console.log(matched);
        return lexicon[matched]
    });
    console.log(str);
return str;
}

convertHTML("A&W'");