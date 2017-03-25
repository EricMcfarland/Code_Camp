$(document).ready(function () {
    var intervalID, intervalIDTwo, workDuration = 0, breakDuration;
    //Working
    $(".counter").on("click", function () {

        switch ($(this).html()) {
            case "+":
                workDuration++;
                $("#duration").html(workDuration);
                break
            case "-":
                if (workDuration > 0) {
                    workDuration--;
                    $("#duration").html(workDuration);
                }
                break
        }
    })

    //Not fully Working
    $("#push").on('click', function () {
        var activeTimer = new Timer(workDuration, "display");
        var inactiveTimer = new Timer(1, "display");

        console.log("intID: " + intervalID);

        intervalID = setInterval(function () {
            console.log(activeTimer);
            activeTimer.countdown(function () {
                var temp = activeTimer;
                activeTimer=inactiveTimer;
                inactiveTimer=temp;
                console.log("ended");
                console.log(activeTimer);
            })
        }, 250);
        console.log("intID: " + intervalID);
    })

    //Working
    $("#reset").on('click', function () {
        clearInterval(intervalID);
        console.log("intID: " + intervalID);

    })

})

//Timer object to contain time and display quantities, as well as countdown methods
//Is this necessary?
function Timer(duration, htmlElement) {
    var that = this;
    var minute = duration;
    var second = 0;
    var display = "";
    var container = htmlElement;

    Timer.prototype.countdown = function (callback) {
        if (second == 0 && this.minute != 0) {
            this.minute--;
            console.log(this.minute);
            second = 59;
        } else if (this.minute >= 0 && second != 0) {
            second--;
        } else {
            callback();
            return false
        }
        display = this.minute + ":" + second.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        console.log(display);
        $("#" + container).html(display);
    };






}