$(document).ready(function () {
    var intervalID, intervalIDTwo, workDuration = 1, breakDuration=1;
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

    //Not fully Working. Clicking multiple times breaks things....
    $("#push").on('click', function () {
        var activeTimer = new Timer(workDuration, "display");
        var duration = workDuration

        console.log("intID: " + intervalID);

        intervalID = setInterval(function () {
            console.log(activeTimer);
            activeTimer.countdown(function () {
                switch(activeTimer.type){
                    case "work":
                    //toggle css class here
                        activeTimer.minute = breakDuration;
                        activeTimer.type = "break";
                        break
                    case "break":
                    //toggle css class here
                        activeTimer.minute = workDuration;
                        activeTimer.type = "work";
                        break
                }        
            })
        }, 250);
        console.log("intID: " + intervalID);
    })

    //Working kind of. May work as intended if problem clicking push in sucession is fixed
    $("#reset").on('click', function () {
        clearInterval(intervalID);
        console.log("intID: " + intervalID);
        $("#display").html("0:00");

    })

})

//Timer object to contain time and this.display quantities, as well as countdown methods
//Is this necessary?
function Timer(duration, htmlElement) {
    this.minute = duration;
    this.second = 0;
    this.display = "";
    this.container = htmlElement;
    this.type = "work"

    Timer.prototype.countdown = function (callback) {
        if (this.second == 0 && this.minute != 0) {
            this.minute--;
            console.log(this.minute);
            this.second = 59;
        } else if (this.minute >= 0 && this.second != 0) {
            this.second--;
        } else {
            callback();
            return false
        }
        this.display = this.minute + ":" + this.second.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        console.log(this.display);
        $("#" + this.container).html(this.display);
    };
}