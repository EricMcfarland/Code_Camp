$(document).ready(function () {
    var intervalID = 0, intervalIDTwo, workDuration = 1, breakDuration = 1;
    //Working
    $(".counter").on("click", function () {

        switch ($(this).attr('id')) {
            case "workIncrement":
                workDuration++;
                $("#workDuration").html(workDuration);
                break
            case "workDecrement":
                if (workDuration > 1) {
                    workDuration--;
                    $("#workDuration").html(workDuration);
                }
                break
            case "breakIncrement":
                breakDuration++;
                $("#breakDuration").html(breakDuration);
                break
            case "breakDecrement":
                if (breakDuration > 1) {
                    breakDuration--;
                    $("#breakDuration").html(breakDuration);
                }
                break
        }
    })

    //Not fully Working. Clicking multiple times breaks things....
    $("#push").on('click', function () {
        var activeTimer = new Timer(workDuration, "display");
        var duration = workDuration
        $("#" + activeTimer.container + " span:first-child").html(activeTimer.type);
        if (intervalID == 0) {
            console.log("intID: " + intervalID);

            intervalID = setInterval(function () {
                console.log(activeTimer);
                activeTimer.countdown(function () {
                    switch (activeTimer.type) {
                        case "work":
                            //toggle css class here
                            activeTimer.type = "BREAK";
                            activeTimer.minute = breakDuration;
                            $("#" + activeTimer.container + " span:first-child").html(activeTimer.type);
                            break

                        case "break":
                            //toggle css class here
                            activeTimer.type = "WORK";
                            activeTimer.minute = workDuration;
                            $("#" + activeTimer.container + " span:first-child").html(activeTimer.type);

                            break
                    }
                })
            }, 250);
            console.log("intID: " + intervalID);
        }
    })

    //Working kind of. May work as intended if problem clicking push in sucession is fixed
    $("#reset").on('click', function () {
        clearInterval(intervalID);
        console.log("intID: " + intervalID);
        $("#display span:first-child").html("Pomodoro");
        $("#display span:last-child").html("0:00");
        intervalID = 0;

    })

})

//Timer object to contain time and this.display quantities, as well as countdown methods
function Timer(duration, htmlElement) {
    this.minute = duration;
    this.second = 0;
    this.display = "";
    this.container = htmlElement;
    this.type = "WORK"

    Timer.prototype.countdown = function (callback) {
        if (this.second == 0 && this.minute != 0) { //1:00 -> 0:59 case
            this.minute--;
            console.log(this.minute);
            this.second = 59;
        } else if (this.minute >= 0 && this.second != 0) {  //2:14 -> 2:13 standard second tick 
            this.second--;
        } else {
            callback();                                     //callback to do something after timer 0:00
            return false
        }
        this.display = this.minute + ":" + this.second.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        console.log(this.display);

        $("#" + this.container + " span:last-child").html(this.display);     //updates the HTML element with the displayed time
    };
}