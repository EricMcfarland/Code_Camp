
var a= "top scope"
console.log("pre funct: "+a);
function b(){
    console.log("b level");
    function c(){
        console.log("c level");
        console.log("a is: "+a);
        function d(){
            console.log("d level");
            console.log(a);
        }
        d();
    }
    c();
}

b();