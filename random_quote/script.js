function randomQuote(){
  //pick and display a random quote
  document.getElementById("quote").innerHTML = quotes[a=Math.floor(Math.random()*quotes.length)][0] + " -"+quotes[a][1];
  
  //update twitter link with new quote
  $("a[href^='https://twitter.com/intent/tweet']").attr("href","https://twitter.com/intent/tweet?text="+quotes[a][0]+" -"+quotes[a][1]);
  
}

$(document).ready(function() {
 
  quotes = [["You're powered up! Get in there!","Ana"],["Nano boost administered!","Ana"],["Warīhum quwitak!","Ana"] ,["dun duh do duh","Bastion"],["Nerf this!","D.Va"],["Initiating self-destruct sequence!","D.Va"],["MEKA activated.","D.Va"],["Suiting up.","D.Va"],["Ryūjin no ken wo kurae!","Genji"],["The dragon becomes me!","Genji"],["Ryū ga waga teki wo kurau!","Hanzo"],["Let the dragon consume you!","Hanzo"],["Fire in the hole!","Junkrat"] ,["Ladies and gentlemen, start your engines!","Junkrat"], ["Let's break it down!","Lucio"],["Let's drop the beat!","Lucio"],["It's high noon!","McRee"],["Step right up.","McRee"],["Dòng zhù! Bùxǔ zǒu","Mei AKA Demon Spawn"],["Freeze! Don't move!", "Mei AKA Demon Spawn"],["Heroes never die!","Mercy"],["Helden sterben nicht!","Mercy"],["Justice rains from above!","Pharah"],["Rocket barrage incoming!","Pharah"], ["Die! Die! Die!", "Reaper"], ["Clearing the area", "Reaper"] ,["Hammer down!", "Reinhardt"] ,["Baha haha cough!", "Roadhog"],["I've got you in my sights!","Solider:76"] ,["Tactical Visor activated.","Solider:76"],["EMP activated!","Sombra"],["Apagando las luces.","Sombra"],["Teleporter online. I have opened the path.","Symmetra"] ,["Molten core!","Torborn"], ["Gotcha!","Tracer"],["Wait for it....","Tracer"],["No one can hide from my sight..." ,"Widowmaker"],["Personne n'échappe à mon regard.","Widowmaker"],["Rawr","Winston"], ["Ogon’ po gotovnosti!","Zarya"],["Fire at will!","Zarya"] ,["Experience tranquility.","Zenyatta"],["Pass into the Iris!","Zenyatta"]];

})


  
