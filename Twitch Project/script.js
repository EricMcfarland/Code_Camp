$(document).ready(function(){
    $("#testButton").on("click", function(){
        console.log("boop");
        var twitchURL = "https://wind-bow.gomix.me/twitch-api/streams/GSL?callback?";
        var params = {
            // "client_id":"cbr83trymj5qe4wg2exr1rhsz3hdhs"
        }
        $.getJSON(twitchURL,params,function(json){
            console.log(json);
            
        })
    })

})