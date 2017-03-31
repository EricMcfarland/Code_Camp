$(document).ready(function () {
    makeTable(5, 5);
    getEmotes();
    //Want to swap this to pure JS
    // $(".counter").on("click", function () {

    //     switch ($(this).html()) {
    //         case "+":
    //             workDuration++;
    //             $("#duration").html(workDuration);
    //             break
    //         case "-":
    //             if (workDuration > 0) {
    //                 workDuration--;
    //                 $("#duration").html(workDuration);
    //             }
    //             break
    //     }
    // })
})

function makeTable(height, width) {

    var rows, cols, tab, tr, td, test, boardHeight = height, boardWidth = width;

    test = document.createElement("td");
    tab = document.getElementById("board");
    //clear existing board
    while (tab.firstChild) {
        tab.removeChild(tab.firstChild);
    }

    //create the board spaces
    for (var row = 0; row < boardHeight; row++) {
        tr = document.createElement('tr');

        for (var col = 0; col < boardWidth; col++) {
            td = document.createElement("td");
            td.className += "boardSpace";
            td.onclick = function () {      //Make this a callable function with img as argument
                var square = event.target;
                console.log(square.firstChild);
                if (square.firstChild) {
                    console.log("remove img")
                    square.removeChild(square.firstChild);
                } else {
                    var image = document.createElement("img");
                    image.setAttribute('src', 'https://static-cdn.jtvnw.net/emoticons/v1/123440/1.0');
                    square.appendChild(image);
                    // if (square.className == "boardSpace") {
                    //     square.className += " greenBackground";
                    // }
                }
            }
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }
    document.getElementById("board").rows[2].cells[2].className += " redBackground";
}

//getting the full list of images is waaaay too slow
function getEmotes() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://twitchemotes.com/api_cache/v2/sets.json', true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var obj = JSON.parse(xmlhttp.responseText);
                console.log(obj)
            }
        }
    };
    xmlhttp.send(null);
}
