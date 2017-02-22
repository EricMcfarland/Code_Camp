function dropElements(arr,func){
console.log(arr);
   for (var index = 0; index < arr.length;) {
       if(func(arr[index])==true){
           console.log("ended");
            return arr;
        } else{
            arr.shift();
            console.log(arr);
            index=0;
            if(arr.length==0){
                return arr;
            }
        }
   }
}
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));