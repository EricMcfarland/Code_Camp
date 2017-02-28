/*
Need to do: 
    X Get online and offline status to work properly
    X Place online and offline streams into their own spaces -Can I make my streambox element hidden then update all at once
    X Build a skeleton and then update the html - sounds way easier than it is.
      Create exception display for deleted account
      Remove the created skele for delted accounts
 */
$(document).ready(function () {
    // $("#testButton").on("click", function () {
    //     console.log("boop");
    //     var twitchURL = "https://wind-bow.gomix.me/twitch-api/streams/reynad27?callback?";
    //     var online = {
    //         // "client_id":"cbr83trymj5qe4wg2exr1rhsz3hdhs"
    //     }
    //     var streamInfo
    //     fetchInfo(twitchURL, params, function (json) { console.log(json) });
    // });


        var streamList = [ "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","Reynad27", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

        //create API queries for each stream in stream list
        streamList.forEach(function (val) {
            var channelURL = "https://wind-bow.gomix.me/twitch-api/channels/" + val + "?callback?";
            var streamURL = "https://wind-bow.gomix.me/twitch-api/streams/" + val + "?callback?"
            fetchInfo(channelURL, null, function(json){
                if(json.error!="Not Found"){
                    buildSkeleton(val);
                    initializeDisplay(json);
                    fetchInfo(streamURL, null, isStreaming);
                }
            })
        
    })
})

//unable to use the /search/ feature of the API. Limited to user, stream, channel


function fetchInfo(URL, params, callback) {      //Redundant function for sake of readability (maybe)
    $.getJSON(URL, params, function (json) {
        callback(json);
    })
}

//(incomplete)updates the status div to Online if the stream object exists
function isStreaming(json) {
    // console.log("stream object");
    // console.log(json);
    if(json.stream!=null&json.status!=404){
        var streamer = json.stream.channel.name.toLowerCase();
        $('#' + streamer+'status').text("Online");
        $('#' + streamer+'viewers').text(json.stream.viewers);
        $('#'+streamer).addClass("online");
        $('#'+streamer).removeClass("offline");
        $('#'+streamer).parent().appendTo("#online");
    }
}

//(incomplete) takes in the channel information to build skeletons that include streamer icon, name, game, status info
function initializeDisplay(json) {               //turned into a callback function to make sure json exists
    if(json.status!=404){
        var streamer = json.name.toLowerCase();
        console.log(streamer);
        // console.log("channel object");
        // console.log(json);
        $('#' + streamer+'name').text(json.display_name);
        $('#' + streamer+'game').text(json.game);
        $('#' + streamer).parent().attr("href",json.url);
        $('#' + streamer+' img').attr("src",json.logo);
    }
}

function buildSkeleton(streamer){
    streamer = streamer.toLowerCase();
    $('#offline').append('<a href=# target="_blank"><div id=' + streamer + ' class="streamBox offline"></div></a>');
    $('#' + streamer).append('<img src =#></img>');
    $('#' + streamer).append('<div class="content"><div id='+streamer+'name></div><div id='+streamer+'game >Playing:</div><div id='+streamer+'status>Offline</div><div id='+streamer+'viewers></div></div>');                        //name
    
    // $('#' + streamer).append('<div id='+streamer+'game >Playing:</div>');           //game
    // $('#' + streamer).append('<div id='+streamer+'status>Offline</div>');                        //online
    // $('#' + streamer).append('<div id='+streamer+'viewers></div>');                        //viewers
}