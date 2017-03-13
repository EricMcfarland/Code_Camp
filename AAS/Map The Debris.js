function orbitalPeriod(arr){                                console.log(arr);
    var GM_KM = 398600.4418; ///km^3/s^-2
    var GM_M = GM_KM * Math.pow(10,9);  //m^3/s^-2
    var earthRadiusKM = 6367.4447;
    var earthRadiusM = earthRadiusKM * Math.pow(10,3);      console.log(earthRadiusKM) 
    var orbPeriods =[];                                     

    arr.forEach(function(val){                              console.log(val)
        var altM = val.avgAlt * Math.pow(10,3);             console.log(altM)
        
        var effectiveRadiusM = earthRadiusM+altM;          console.log(effectiveRadiusM)
        
        var period = 2*Math.PI*Math.sqrt((Math.pow(effectiveRadiusM,3))/(GM_M));       console.log(period);
        

        delete val.avgAlt;                                      console.log(arr)
        val.orbitalPeriod = Math.round(period);
    })
    
    return arr

}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553},{name : "sputnik", avgAlt : 35873.5553}]);