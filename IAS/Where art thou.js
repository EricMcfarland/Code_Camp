function whatIsInAName(collection, source) {
    console.log(collection)
    console.log(Object.keys(source).length);

    for (var key in source) {
        if (source.hasOwnProperty(key)) {               //iteration of the object in source
            console.log("source: " + key + " -> " + source[key]);


            for (var index = 0; index < collection.length; index++) {   //interate through each object in the collection array(?)

                console.log("col key: " + key);
                console.log(collection[index].hasOwnProperty(key));
                if (collection[index].hasOwnProperty(key)) {
                    console.log("collection: " + key + " -> " + collection[index][key]);
                    if (collection[index][key] === source[key]) {
                        console.log("in loop");
                    }
                    else {
                        delete collection[index];
                        console.log(collection);
                        console.log("del: " + delete collection[index]);
                        console.log("collection is: " + collection);
                    }
                }else{
                    delete collection[index];
                    console.log(collection);
                    console.log("del: " + delete collection[index]);
                    console.log("collection is: " + collection);
                
                }
            }
        }
    }

collection = collection.filter(function (n) { return n != undefined });
console.log(collection);
return collection;
}

// source.forEach(function(sourceDict,sourceIndex,array){
//     this.forEach(function(collectionDict, index, array){
//         if(this.hasOwnProperty(Object.keys(sourceDict)[0])){
//             console.log(this.hasOwnProperty(Object.keys(sourceDict)[0]));
//         }
//     })

// },collection)

// var arr=[];
// var key = Object.keys(source)[0];
// console.log(collection[0][key]);
// collection.forEach(function(val,index,array){
//      if(val.hasOwnProperty(key)){
//          if(val[key] == this[Object.keys(this)[0]])
//          arr.push(val);
//          console.log(arr);
//      }

//     console.log(Object.keys(source)[0]);
//     console.log(source[Object.keys(source)]);
// },source)
// return arr;


whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })