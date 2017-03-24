/*  Build a calculator 
    Create user interface elements with onclick events: numbers, operators, return, and clear
    Create a display to display results and in progress equations
    Create a class to hold the neccesary information: current input, previousResult, and operator


/////TODO////
Decimal....oh no
*/
$(document).ready(function () {

    //On click a number tile class
    /////Working////
    $(".number").on("click", function () {
        console.log("number");
        console.log(Calculator)
        if (Calculator.currentTotal !== "0" && Calculator.operations.length == 0) {
            console.log("reset current total");
            Calculator.numbers = [];
            Calculator.currentTotal = "0";
            Calculator.currentInput = "";
        }
        var digit = $(this).html();          //type: String
        Calculator.currentInput += digit;      //append the next number to end of last one
        console.log("input value: " + Calculator.currentInput);
        $("#display").html(Calculator.currentInput);

    });

    //On click an operator title class. 
    $(".operator").on("click", function () {
        console.log('operator: ');
        var operator = $(this).html()
        //Display the operator
        $("#display").html(operator);

        //create NOP

        
        if (Calculator.currentInput!=="") {
            Calculator.numbers.push(Calculator.currentInput);
            Calculator.operations.push(operator)
            console.log('Calculator.numbers: ' + Calculator.numbers)
            console.log('Calculator.operations: ' + Calculator.operations)
            //reset current input
            Calculator.currentInput = "";
        } else{
            Calculator.operations.pop();
            Calculator.operations.push(operator);
            console.log('Calculator.numbers: ' + Calculator.numbers)
            console.log('Calculator.operations: ' + Calculator.operations)
        }


    });

    //Return button - displays the current val
    $("#return").on('click', function () {
        console.log("return");
        Calculator.numbers.push(Calculator.currentInput);
        Calculator.operations.push($(this).html());
        console.log('Calculator.numbers: ' + Calculator.numbers);
        console.log('Calculator.operations: ' + Calculator.operations)

        //resolve the last calculation
        for (var index = 0; index < Calculator.numbers.length - 1; index++) {
            console.log('Calculator.numbers.length: ' + Calculator.numbers.length)
            var numberElement = Calculator.numbers[index];
            var operationElement = Calculator.operations[index];

            //go through each operation element and perform it on its NOP and the number of the next NOP
            switch (operationElement) {
                case "+":
                    Calculator.numbers[index + 1] = Calculator.add(numberElement, Calculator.numbers[index + 1])
                    Calculator.currentTotal = Calculator.numbers[index + 1];
                    console.log("added");
                    break;
                case "-":
                    Calculator.numbers[index + 1] = Calculator.subtract(numberElement, Calculator.numbers[index + 1])
                    Calculator.currentTotal = Calculator.numbers[index + 1];
                    console.log("subtract");
                    break;
                case "*":
                    Calculator.numbers[index + 1] = Calculator.multiply(numberElement, Calculator.numbers[index + 1])
                    Calculator.currentTotal = Calculator.numbers[index + 1];
                    console.log("multiply");
                    break;
                case "/":
                    Calculator.numbers[index + 1] = Calculator.divide(numberElement, Calculator.numbers[index + 1])
                    Calculator.currentTotal = Calculator.numbers[index + 1];
                    console.log("divide");
                    break;
                default:
                    break;
            }


        }

        //display the total
        Calculator.currentTotal = Calculator.currentTotal.toString();
        $("#display").html(Calculator.currentTotal);
        //set the old result as the currentInput, reset NOP array
        Calculator.currentInput = Calculator.currentTotal.toString();
        Calculator.numbers = [];
        Calculator.operations = [];
       

    });

    //return to default state
    /////Working/////
    $("#clear").on('click', function () {
        Calculator.currentTotal = "0";
        Calculator.currentInput = "";
        Calculator.operations = [];
        Calculator.numbers = [];
        $("#display").html(Calculator.currentTotal);
    })


});

//Calculator class to hold methods and variables
Calculator = {
    currentTotal: "0",
    currentInput: "",
    operations: [],
    numbers: [],
    //turn currentTotal and currentInput into Numbers before computing
    add: function (str1, str2) {
        result = Number(str1) + Number(str2);
        console.log("result: " + result);
        return result;
    },
    subtract: function (str1, str2) {
        result = Number(str1) - Number(str2);
        console.log("result: " + result);
        return result;
    },
    multiply: function (str1, str2) {
        result = Number(str1) * Number(str2);
        console.log("result: " + result);
        return result;
    },
    divide: function (str1, str2) {
        if (str2 != 0) {
            result = Number(str1) / Number(str2);
            return result;
        } else return "inf"
    },
}