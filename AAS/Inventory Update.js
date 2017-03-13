//Take in two arrays, a stock and a shipment. Update the stock with any like items on shipment.
//If shipment has unique items, then add it to the stock
//Approaches: 1) turn them to objects, then convert the stock back to an array for return
//              2) leave them as arrays and do indexOf stuff

//trying approach 1
//but do it as arrays afterwards
function updateInventory(stock, shipment){
//convert arrays to objects
    var Stock = {}, Shipment = {};
    stock.forEach(function(val){
        Stock[val[1]] = val[0];
    })
    console.log(Stock)
    shipment.forEach(function(val){
        Shipment[val[1]] = val[0];
    })
    console.log(Shipment);

//update Stock with like items from Shipment, and add unlike items
    for (item in Shipment){
        console.log(item)
        if(Stock.hasOwnProperty(item)){
            Stock[item]+= Shipment[item];
        } else {
            Stock[item] = Shipment[item];
        }
        console.log("After shipment: ")
        console.log(Stock)
    }
    

    stock = [];
    for (item in Stock){
        stock.push([Stock[item], item])
    }
    stock.sort(function(a,b){
        if(a[1]<b[1]){
            return -1
        }else if (a[1]>b[1]){
            return 1
        } else 
        return 0
    });
    console.log("stock");
    console.log(stock);
    
    return stock
    
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])