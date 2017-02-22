function sumAll(arr){
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    for (var index = min, sum =0; index <= max; index++) {
        sum += index; 
    }
    console.log(sum);
}

sumAll([1,4]);