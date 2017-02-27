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
        die.addEventListener("click",function(){game.selectForReRoll(i);},false)
    };
    document.getElementsByTagName("body")[0].appendChild(diceField);

    var playingField = document.createElement("table");
    playingField.class = "table";
    for(let i = 0; i<scoreTypes.length; i++){
//        var row = playingField.insertRow(-1);
        var row = document.createElement("tr");
        row.id = "row"+i;
        row.className = "success";
//        var cellForScoreType = row.insertCell();
        var cellForScoreType = document.createElement("th");
        cellForScoreType.innerHTML = scoreTypes[i];
        cellForScoreType.addEventListener("click", function(){game.getScore(i)},false);
        row.appendChild(cellForScoreType);
//        var cellForScore = row.insertCell();
        var cellForScore = document.createElement("th");
        cellForScore.innerHTML = 0;
        cellForScore.id ="score" + i;
        row.appendChild(cellForScore);
        playingField.appendChild(row);
    };
    document.getElementsByTagName("body")[0].appendChild(playingField)
};
Visualiser.prototype.inputDice = function(dice){
    for (let i = 0; i<dice.length; i++){
//        document.getElementById("die" + i).src = "img/"+(dice[i])+".png";
        this.changeDie(i, dice[i]);
    };
};
Visualiser.prototype.addScore = function(typeIndex, score){
    var scoreField = document.getElementById("score"+typeIndex)
    scoreField.innerHTML = score;
    var row = document.getElementById("row"+typeIndex);
    if (score>0){
        row.style.backgroundColor = "#4BE23A"
    }
    else{
        row.style.backgroundColor = "#F3232A"
    }
}
Visualiser.prototype.changeDie = function (index, value){
    document.getElementById("die" + index).src = "img/"+(value)+".png";
}