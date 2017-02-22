//https://en.wikipedia.org/wiki/Least_common_multiple//
// Another time

//smallest common multiple of a range of non-zero integers is such that the number is divisible by all numbers in the list, 
//however numbers in the list that the product of other values in the list can be ignored. 

function smallestCommons(arr){
    //sort arr such that smaller number is first
    arr = arr.sort(function(a,b){
        return a-b;
    });
    console.log("arranged: "+arr);

    //create an array with length equal to the difference of the two values in input array
    //then populate it with all integers between the two input values
    var arr = Array.apply(null,Array(arr[arr.length-1]-arr[0]+1)).map(function(val, index){  //Array.apply(null,Array(n) creates an array of size n, which is then populated by the .map method
        return this[0]+index;                                         //The Array(n) constructor does not appear to have the .map method
    },arr);
    console.log("full: "+arr);
    
    //makes list of primes as large as largest number in input array
    var listOfPrimes = primes(arr[arr.length-1]);
    console.log("primes: "+listOfPrimes);


    var scm =[];
    
    console.log(divisibleCounter);
    for (var primeIndex = 0; primeIndex < listOfPrimes.length; primeIndex++) {
        var prime = listOfPrimes[primeIndex];
        var divisible=false;
        var divisibleCounter= Array.apply(null, Array(arr.length)).map(Number.prototype.valueOf,0);

        console.log("arr after a last div: "+arr); 
        for (var divisionIndex = 0; divisionIndex < arr.length; divisionIndex++) {
            var element = arr[divisionIndex];
            while(element%prime==0){
                console.log("prime is:"+prime);
                console.log("element being div: "+element)
                element= element/prime;
                arr[divisionIndex] =element;
                console.log(arr);
                   
                divisibleCounter[divisionIndex]++
                console.log("divcount: "+ divisibleCounter);
    
  
    
            }
        }

        for (var index = 0; index < Math.max.apply(null, divisibleCounter); index++) {
            scm.push(prime);
            console.log("scm"+scm); 
        }
        
    }
    console.log(scm.reduce(function(acc,val){
        return acc*val;
    },1));
    
    return scm.reduce(function(acc,val){
        return acc*val;
    },1);

}
function primes(num){ //gets all primes up to a number:num
    var isPrime = false;
    var primes=[2];
    for (var integer = 3; integer <= num; integer++) {
        for (var index = 0; index < primes.length; index++) {
            if(integer%primes[index]===0){
                isPrime = false;
                break
            } 
            isPrime = true;
        }
        if(isPrime){
            primes.push(integer);
            console.log(primes);
        }
    }
    return primes;
}


smallestCommons([5,1]);

