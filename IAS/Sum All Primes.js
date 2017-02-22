//find if a number is prime:
//prime means that a number is indivisable by all numbers smaller than it
//The simple solution is to test if any numbers smaller than the number in question return a modulo of 0, if so the first one means it is not prime
//My thought is to try dividing by the previous primes, given that all non primes are the product of smaller numbers


function primes(num){
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

function sumPrimes(num){
    var myPrimes = primes(num);
    return myPrimes.reduce(function(acc, val){
        return acc + val;
    }, 0);
    
}
