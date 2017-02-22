//function that takes in multiple array arguments. Should return an array that represents all unique elements from the input array, in the order they were given.
//
//The idea is to start building via the first array. The next input array will compare its elements to the first array and append their unique elemnts. This new array
//becomes the comparator array and the process continues until all arguments are handled.

//Need to revisit the [arguments] propety
//Iterative function to compare the new array elements to the comparator array elements. [forEach(callback, thisArg)] probably 

function uniteUnique(arr){
    var args = Array.from(arguments);       //turn all inputs into a single array
    var masterArray=[];                     //make empty array that we will populate with unique elements
    console.log(args);
    args.forEach(function(value, index, array){     //this callback will iterate over each of the input arrays 
        console.log("input "+index+"="+value);
        value.forEach(function(value, index, array){  //this callback will iterate over the individual elements of each of the input arrays
            console.log("element "+index+"="+value);
            if(masterArray.indexOf(value)<0){       //if the current value is not found int he masterarray then add it
                masterArray.push(value);
            }
            console.log(masterArray);
        }, this);
    }, masterArray);
    return masterArray
}

uniteUnique([1, 3, 2], [5, 2, 1,[1, 4]], [2, 1]);