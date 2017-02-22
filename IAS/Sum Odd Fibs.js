function fibonacciToNum(num){
    sequence= [1,1];

    for (var index = 0; sequence[index+1]<=num; index++) {
        if(sequence[index+1]+sequence[index]<=num){
        sequence[index+2]= sequence[index+1]+sequence[index];
        console.log(sequence);
        }
    };
    console.log(sequence);
    return sequence;
}

function sumFibs(num){
    fibonacci = fibonacciToNum(num);
    console.log(fibonacci);
    oddFibs = fibonacci.filter(function(value){
        return value%2 != 0;
    })
    console.log(oddFibs);
    console.log(oddFibs.reduce(function(acc, val){
        return acc + val;
    }, 0));
    return oddFibs.reduce(function(acc, val){
        return acc + val;
    }, 0);
    
}
sumFibs(75025);