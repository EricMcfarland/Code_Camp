
function checkCashRegister(price, cash, cid) {
  // Attempt 1: Create an Object that describes the full information of the till(cid)
  //            This Register would include name of currency, value of currency, total value of currency in drawer, and quantiy of currency
  //            For each transaction it will compute the required change and then starting from the largest currency will remove the necessary
  //            quantities to sum up to change.
  //            
  //            This object's direct children properties will be the name of each currency ("PENNY","QUARTER","FIVE"). 
  //            Each of these properties will have children properties that discribe their value, net value, and quantity.
  //            In addition it might make sense to add price, cash and change as properties
  //        
  //             This object will need functions to manipulate the net value and quantity of each type of currencies. 
  //              
  //              Register.change(price, cash) //return the amount of change required and updates the Register
  //              Register.cashIn(price, cash) //Adds the cash quanties to till THIS MAY NOT BE NEEDED FOR EXACT PROBLEM
  //              Register.cashOut()            //
  //              Transaction. updateQuanties. UpdateTotalValue. isSuffienctFunds. determineChange
  //
  //
  var Till = {
    "ONE HUNDRED": {
      "value": 100,
      "totalValue": 0,
      "quantity": 0,
    },
    "TWENTY": {
      "value": 20,
      "totalValue": 0,
      "quantity": 0,
    },
    "TEN": {
      "value": 10,
      "totalValue": 0,
      "quantity": 0,
    },
    "FIVE": {
      "value": 5,
      "totalValue": 0,
      "quantity": 0,
    },
    "ONE": {
      "value": 1,
      "totalValue": 0,
      "quantity": 0,
    },
    "QUARTER": {
      "value": 0.25,
      "totalValue": 0,
      "quantity": 0,
    },
    "DIME": {
      "value": 0.10,
      "totalValue": 0,
      "quantity": 0,
    },
    "NICKEL": {
      "value": 0.05,
      "totalValue": 0,
      "quantity": 0,
      // "calcQuantity": function () {
      //   this.quantity = this.totalValue / this.value
      // }
    },
    "PENNY": {
      "value": 0.01,
      "totalValue": 0,
      "quantity": 0,
      // "calcQuantity": function () {
      //   this.quantity = this.totalValue / this.value
      // }
    },

    ////////Methods////////

    "updateQuanties": function () {
      for (currency in this) {
        if (this.hasOwnProperty(currency)) {
          this[currency].quantity = this[currency].totalValue / this[currency].value;
        }
      }
    },

    "changeTotalValue": function (currency, totalval) {

      if (this.hasOwnProperty(currency)) {
        if ((totalval * 100) % (this[currency].value * 100) == 0) {
          this[currency].totalValue += totalval;
        }
      } else {
        console.log("updatTV error");
        // Error
      }
    },

    "totalInTill": function () {
      var sum = 0;
      for (currency in this) {
        if (this[currency].hasOwnProperty("totalValue")) {

          sum += this[currency].totalValue;
        }
      }
      return sum;
    },
    "dispenseChange": function (price, cash) {
      var change = cash - price;
      var changeGiven = []
      ammountInTill =this.totalInTill();
      if (ammountInTill < change) {
        return "Insufficient Funds"
      } else if (ammountInTill == 0) {
        return "Closed"
      }
      console.log("starting change: "+change)
      for (currency in this) {
        if (this[currency].hasOwnProperty("value")) {
          
          console.log(currency);
          while (this[currency].value <= change & this[currency].quantity>0){
            change = change-this[currency].value;
            console.log("remaing change: "+change);
            this.changeTotalValue(currency, -this[currency].value);
            this.updateQuanties();
          }
        }

      }
      return "testing"

    },
  }
    //initialize the till with the CID ammounts
    cid.forEach(function (val, ind) {
      Till.changeTotalValue(...val);
    })
  Till.updateQuanties();

    var change = cash - price;
    ammountInTill = Till.totalInTill();

    // Check if register can handle the transaction 
    if(ammountInTill < change) {
      return "Insufficient Funds"
    } else if (ammountInTill == 0) {
      return "Closed"
    }

  //Calculates the change that uses the least quantity of change. 
    console.log(Till.dispenseChange(price,cash));





  }

  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);





