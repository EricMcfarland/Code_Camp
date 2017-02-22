function diffArray(arr1, arr2){
    var joinedArr = arr1.concat(arr2);
    var newArr = joinedArr.filter(logIt, arr1);
    var newNewArr = joinedArr.filter(logIt, arr2);
    console.log("new arr "+newArr);
    console.log("newNew Arr "+ newNewArr);
    return newNewArr.concat(newArr);
}
function logIt(value, index, array){
    console.log("value is: "+value);
    console.log("index is: "+index);
    console.log("array is: "+array);
    console.log("arr2 is: " +this);
    console.log("indexOf "+!(this.indexOf(value)+1));

    return !(this.indexOf(value)+1);
}
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


/*
The filter() callback passes the value of the element, the index of the element, and teh array object of the function and keeps the elements that return true. In addition
an additional argument can be passed that will be treated as the (this) element
The callback can return another function using the values that are passed via filter

An indexOf() returns -1 if an element does not exist within an array

Could probably just iterate and compare each element of one array to each element of the other. 
*/