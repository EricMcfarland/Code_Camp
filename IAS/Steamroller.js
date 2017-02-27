//Flatten arrays. Take the elements within arrays until they are only simple elements in teh highest level arrays

function steamrollArray(arr){
    var result=[]
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];                   //current loop element

        if(Array.isArray(element)){                 //test if the element is infact an Array    
console.log("element: ");
console.log(element);

            result =result.concat(steamrollArray(element));         //take the result of the function and push it to result       
                                                            //
        }else{
            console.log("concated: "+element)
            result = result.concat(element);
            console.log("result: ");
            console.log(result);
        }
    }
    console.log("result "+result);
    console.log(result);
    return result
    
}




//Flatten arrays. Take the elements within arrays until they are only simple elements in teh highest level arrays

function steamrollerArray(arr){
   var result = []
   for (var index = 0; index < arr.length; index++) {
       var element = arr[index];                   //current loop element
       if(Array.isArray(element)){                 //test if the element is infact an Array    
           console.log("element: ");
           console.log(element);

           result.push(steamrollerArray(element));                //if it is an array run the function again, but this time on the internal array elements
           
       }else{
           console.log("arr: ");
           result.push(element);
           console.log(arr);
       }
   }
   console.log(result);
   console.log("result: "+result);
   return result   
}

steamrollArray([[["a"]], [["b"]]]);