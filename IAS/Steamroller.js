//Flatten arrays. Take the elements within arrays until they are only simple elements in teh highest level arrays

function steamrollArray(arr){
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];                   //current loop element
        if(Array.isArray(element)){                 //test if the element is infact an Array    
            console.log("element: ");
            console.log(element);
            steamrollArray(element);                //if it is an array run the function again, but this time on the internal array elements
            
        }else{
            console.log("arr: ");
            arr[index]=element;
            console.log(arr);
            return arr
        }
    }
    
}

steamrollArray([[["a"]], [["b"]]]);