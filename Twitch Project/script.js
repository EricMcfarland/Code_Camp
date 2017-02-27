/*
Need to do: 
    X Get online and offline status to work properly
    X Place online and offline streams into their own spaces -Can I make my streambox element hidden then update all at once
    X Build a skeleton and then update the html - sounds way easier than it is.
      Create exception display for deleted account
 */
$(document).ready(function () {
    // $("#testButton").on("click", function () {
    //     console.log("boop");
    //     var twitchURL = "https://wind-bow.gomix.me/twitch-api/streams/reynad27?callback?";
    //     var params = {
    //         // "client_id":"cbr83trymj5qe4wg2exr1rhsz3hdhs"
    //     }
    //     var streamInfo
    //     fetchInfo(twitchURL, params, function (json) { console.log(json) });
    // });

    $("#testButtonTwo").on("click", function () {
        var streamList = [ "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","Reynad27", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

        //create API queries for each stream in stream list
        streamList.forEach(function (val) {
            buildSkeleton(val);

            var channelURL = "https://wind-bow.gomix.me/twitch-api/channels/" + val + "?callback?";
            var streamURL = "https://wind-bow.gomix.me/twitch-api/streams/" + val + "?callback?"
            fetchInfo(channelURL, null, initializeDisplay);
            fetchInfo(streamURL, null, isStreaming);

        })
    })
})

//unable to use the /search/ feature of the API. Limited to user, stream, channel


function fetchInfo(URL, params, callback) {      //Redundant function for sake of readability (maybe)
    $.getJSON(URL, params, function (json) {
        if (json.status != 404) {
            callback(json);
        }else{
            $("#deletedAccount").text(json.message);
        }
    })
}

//(incomplete)updates the status div to Online if the stream object exists
function isStreaming(json) {
    // console.log("stream object");
    // console.log(json);
    if(json.stream!=null){
        var streamer = json.stream.channel.name.toLowerCase();
        $('#' + streamer+'status').text("Online");
        $('#' + streamer+'veiwers').text(json.stream.viewers);
        $('#'+streamer).addClass("online");
        $('#'+streamer).appendTo("#online");

    }
}

//(incomplete) takes in the channel information to build skeletons that include streamer icon, name, game, status info
function initializeDisplay(json) {               //turned into a callback function to make sure json exists

    //need to validate a property exists before appending a value to it??


    var streamer = json.name.toLowerCase();
    console.log(streamer);
    // console.log("channel object");
    // console.log(json);
    $('#' + streamer+'name').text(streamer);
    $('#' + streamer+'game').text(json.game);
    $('#' + streamer).parent().attr("href",json.url);
    $('#' + streamer+' img').attr("src",json.logo);

}

function buildSkeleton(streamer){
    streamer = streamer.toLowerCase();
    $('#offline').append('<a href=# target="_blank"><div id=' + streamer + ' class="streamBox"></div></a>');
    $('#' + streamer).append('<div id='+streamer+'name></div>');                        //name
    $('#' + streamer).append('<img src =#></img>');   //logo
    $('#' + streamer).append('<div id='+streamer+'game >Playing:</div>');           //game
    $('#' + streamer).append('<div id='+streamer+'status>Offline</div>');                        //online
    $('#' + streamer).append('<div id='+streamer+'viewers></div>');                        //viewers
}