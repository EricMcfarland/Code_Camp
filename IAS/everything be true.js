//check if a given key for a dictionary exists and is of type boolean

function truthCheck(collection, pre){
    truthiness = true;

    return collection.every(function(val,index){
        console.log(val);
        console.log(val.hasOwnProperty(pre));
        if(val.hasOwnProperty(pre)){
            if(val[pre]){
                console.log(val[pre]);
                console.log("true");
                truthiness = true;
                return true
            }else{
                console.log("false");
                return false
            }
        }
    })
    
}


truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") 