function Visualiser(){


};
Visualiser.prototype.createPlayingField = function(scoreTypes){
//    var diceField =  document.createElement("")
    var playingField = document.createElement("table");
    playingField.class = "table";
    for(let i = 0; i<scoreTypes.length; i++){
        var row = playingField.insertRow(-1);
        var cellForScoreType = row.insertCell();
        cellForScoreType.innerHTML = scoreTypes[i];
        cellForScoreType.addEventListener("click", function(){game["getScoreAs"+scoreTypes[i]]()},false);
        var cellForScore = row.insertCell();
        cellForScore.innerHTML = 0;
        cellForScore.id ="scorei";

    };
    document.getElementsByTagName("body")[0].appendChild(playingField)
};
//Visualiser.prototype.createScoreboard = function(players){
//    var scoreboard = document.createElement("table");
//    scoreboard.class = "scoreboard";
//    var body = document.getElementsByTagName("body")[0];
//    for(var i = 0; i<players.length;i++){
//        var row = scoreboard.insertRow(-1);
//        var cellForName = row.insertCell();
//        cellForName.innerHTML = players[i].getName();
//        cellForName.class = "name";
//        var cellForScore = row.insertCell();
//        cellForScore.innerHTML = players[i].getScore();
//        cellForScore.id = "playerscore" + i;
//        cellForScore.class = "score";
//    };
//    body.insertBefore(scoreboard,body.firstChild);
//};