//Need to fix handling multiple of same number in a row.

// function pairwise(arr, arg) {
//     var initialArr = arr.slice(0); console.log(initialArr);
//     var sumTotal = 0;
    
//      while (arr.length>0){
//         var testVal = arr[0]; console.log("testVal: "+testVal)
//         arr.splice(0,1);
//         var match = sumsTo(testVal, arr , arg); console.log("match: "+match);
//         if(match){
//             console.log("initArr after match: "+initialArr)
//             console.log(initialArr.indexOf(testVal))
//             sumTotal += initialArr.indexOf(testVal) + initialArr.indexOf(match, initialArr.indexOf(testVal)+1); console.log("sumtotal: "+sumTotal);
//             arr.splice(arr.indexOf(match),1);

//         }
//         console.log("arr: "+arr);
//         console.log("loop");

//      }   
//      console.log("loopbroke");
//      console.log(sumTotal); 
//      return sumTotal

// }

// function sumsTo(val, arr, total) {
//     //takes in a value and an array and returns the first index of arr that val +arr[i] = total

//         for (var index = 0; index < arr.length; index++) {
//             var element = arr[index];
//             if (val + element === total) {
//                 return element
//             }

//         }
//         return NaN
    
// }}

function pairwise(arr, arg){
    var sumtotal = 0;
    var matchedIndices = [];
    for (var valsIndex = 0; valsIndex < arr.length-1; valsIndex++) {
        var testVal = arr[valsIndex]; console.log("test val "+testVal)

        for (var index = valsIndex+1; index < arr.length; index++) {
            var compare = arr[index]; console.log("comparer "+compare);
            if(testVal+compare==arg &&matchedIndices.indexOf(index)==-1 && matchedIndices.indexOf(valsIndex)==-1){
                sumtotal += valsIndex + index; console.log("sumtotal "+sumtotal);
                matchedIndices.push(valsIndex);
                matchedIndices.push(index); console.log(matchedIndices);
                break
            }            
        }
            
    }
    return sumtotal
    } 





 pairwise([1, 4, 2, 3, 0, 5], 7)

