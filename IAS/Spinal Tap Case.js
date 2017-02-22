//All uppercase needs to be lowercase
//Unless the first character it needs to be preceeded by -
//Non alpha characters need to be removed
//
//Format all words to start uppercase
    // 
//remove all whitepace/non-alpha/non-hypen
//hypen and lowercase all uppercae except first


function spinalCase(str){
    re = /\b[a-z]/gi; //find all words starting with 
    console.log(str);
    str = str.replace(re, function(matched){
        console.log(matched);
        return matched.toUpperCase();
    });
    console.log(str);

    re = /\s|[^a-z]/gi;
    console.log(re);
    str = str.replace(re, function(matched){
        console.log(matched);
        return "";
    });
    console.log(str);

    re= /[A-Z]/g;
     str = str.replace(re, function(matched, index){
        console.log(matched);
        console.log(index);
        if(index>0){
        return "-" + matched.toLowerCase();
        }else{ return matched.toLowerCase();}
    });
    console.log(str);
    return str;
}

spinalCase("Teletubbies say Eh-oh");