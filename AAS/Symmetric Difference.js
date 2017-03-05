//take first array and concat to next array. filter only values that firstIndex and lastIndex are the same
//this result array will be have the next array concat to it

function sym(args){
    var args = Array.from(arguments);

    args.forEach(function(val,index,array){array[index] = prepArray(val)});
    console.log(args)
    for (var index = 1, symDiff = args[0]; index < args.length; index++) {
         symDiff = symDiff.concat(args[index]);
         symDiff = cleanArray(symDiff);  
    }
    console.log(symDiff);
        return symDiff
}
function cleanArray(array){
    array =array.filter(function(val,index, array){
            console.log("first: "+array.indexOf(val))
            console.log("last: "+array.lastIndexOf(val))
            console.log(array.indexOf(val)==array.lastIndexOf(val))
            return array.indexOf(val)==array.lastIndexOf(val);
    })
    return array
}
function prepArray(array){
    return array.filter(function(val, index){
        return array.indexOf(val) ==index
    })
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);