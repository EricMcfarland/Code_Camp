//create function that tries to sum two numbers if two arguments are passed. If only one argument is passed then return 
//function that accepts a single argument and sums the single argument from the first function and single argument from the second

function addTogether(){
    var args = Array.from( arguments);
    console.log("my inputs: "+args);


    if(args.every(function(val){
            return (typeof val === "number");
            console.log(typeof val);
        })==false){
            return undefined;
        }

    if(arguments.length>=2){
        return args[0]+args[1];
    } 
    
    else if (arguments.length===1){
        function addAnother(val){
            if(typeof val!=="number"){
            return undefined;
        }
            console.log("passed val "+val);console.log("arg0: "+args[0]);
            return val + args[0];
        }
        return addAnother
    }
}

console.log(addTogether(2)([3]));
// var hello = addTogether("http://bit.ly/IqT6zt");
// console.log(hello(5));