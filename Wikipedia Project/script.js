$(document).ready(function(){
    //Listeners
    $("#normalSearch").submit(function(e){

        e.preventDefault(); //prevents the redirect from form submit
        $("#pages").empty();
        //defines and semivalidates our search query
        params.srsearch = $("#searchBox").val();
        if(params.srsearch===""){params.srsearch="nothing";console.log("empty field");}
        console.log(params);
        //Gets JSON
        $.getJSON(wikiAPI,params,function(json){
            console.log("fetched");     
            console.log(json);

            //Goes through all elements and populates them to html elements
            $.each(json.query.search, function(index, value){
                var title = json.query.search[index].title
                // TO DO: Update with divs and snippet text and img and maybe transitions
                $("#pages").append('<p>'+title+'</p>');
                // console.log(json.query.search[index].title);
            })
        });
    })
    
    //Query elements
    var wikiAPI ="https://en.wikipedia.org/w/api.php?";
    var params ={
        "action":"query",
        "list": "search",
        "srsearch":"Bear",
        "utf8":"",
        "origin":"*",
        "format":"json"
    };
    

    console.log("ran");       
})