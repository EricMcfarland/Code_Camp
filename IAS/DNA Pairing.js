
function pairElement(str) {
    bases = str.split("");
    basePairs=[];
    console.log(bases);
    bases.forEach(function(value){
        if(value=="C"){
            basePairs.push(["C","G"]); 
        } else if(value=="G"){
            basePairs.push(["G","C"]);
        } else if(value=="A"){
            console.log("in A");
            basePairs.push(["A","T"]);
        } else if(value=="T"){
            basePairs.push(["T","A"]);
        }else {
            alert("invalid input");
        }
    })
    console.log("BP: "+basePairs);
  return basePairs;
}
console.log([].concat(["a","b"].concat(["A"])));
console.log(pairElement("ATCG"));