function Visualiser(){


};
Visualiser.prototype.createPlayingField = function(scoreTypes){
    var diceField =  document.createElement("div");
    var rollButton = document.createElement("button");
    rollButton.className = "btn btn-success";
    rollButton.innerHTML = "Roll Dice";
    rollButton.addEventListener("click", function(){game.rollDice();} ,false);
    diceField.appendChild(rollButton);
    for (let i = 0; i< 5; i++){
        var die = document.createElement("img");
        die.src = "img/empty.png";
        die.id = "die" + i;
        diceField.appendChild(die);
    };
    document.getElementsByTagName("body")[0].appendChild(diceField);

    var playingField = document.createElement("table");
    playingField.class = "table";
    for(let i = 0; i<scoreTypes.length; i++){
        var row = playingField.insertRow(-1);
        var cellForScoreType = row.insertCell();
        cellForScoreType.innerHTML = scoreTypes[i];
        cellForScoreType.addEventListener("click", function(){game.getScore(i)},false);
        var cellForScore = row.insertCell();
        cellForScore.innerHTML = 0;
        cellForScore.id ="score" + i;

    };
    document.getElementsByTagName("body")[0].appendChild(playingField)
};
Visualiser.prototype.inputDice = function(dice){
    for (let i = 0; i<dice.length; i++){
        document.getElementById("die" + i).src = "img/"+(dice[i])+".png";
    };
};
Visualiser.prototype.addScore = function(typeIndex, score){
    var scoreField = document.getElementById("score"+typeIndex)
    scoreField.innerHTML = score;
    if (score>0){
        scoreField.className = "success"
    }
    else{
        scoreField.className = "danger"
    }
}