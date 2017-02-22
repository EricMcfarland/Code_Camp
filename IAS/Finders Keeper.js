function findElement(arr,func){
   
    for (var index = 0; index < arr.length; index++) {
        console.log("element: "+arr[index]);
        
        if(func(arr[index])){
            console.log(arr[index]);
            return arr[index];
            }
         }  
        
    }
        
console.log("remainder: "+4%2);
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 17 === 0; }))