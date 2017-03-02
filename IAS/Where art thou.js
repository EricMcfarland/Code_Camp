function whatIsInAName(collection, source){
    var arr=[];
    var key = Object.keys(source)[0];
    console.log(collection[0][key]);
    collection.forEach(function(val,index,array){
         if(val.hasOwnProperty(key)){
             if(val[key] == this[Object.keys(this)[0]])
             arr.push(val);
             console.log(arr);
         }

        console.log(Object.keys(source)[0]);
        console.log(source[Object.keys(source)]);
    },source)
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
