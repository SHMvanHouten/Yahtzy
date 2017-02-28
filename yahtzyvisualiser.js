function Visualiser(indexOfScoreTypesBottomScore, scoreTypes){
    this.getScoreTypeCells = function(position, playingField){
        if(position==="top"){
            whereToStart = 0;
            whereToEnd = indexOfScoreTypesBottomScore;
        }
        else if(position==="bottom"){
            whereToStart = indexOfScoreTypesBottomScore;
            whereToEnd = scoreTypes.length;
        }
        for(let i = whereToStart; i<whereToEnd; i++){
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
    };

};
Visualiser.prototype.createPlayingField = function(scoreTypes){
    var diceField =  document.createElement("div");
    var rollButton = document.createElement("button");
    rollButton.id = "rollButton";
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
    this.getScoreTypeCells("top", playingField);
    this.getScoreTypeCells("bottom", playingField);


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
};
Visualiser.prototype.changeDie = function (index, value){
    document.getElementById("die" + index).src = "img/"+(value)+".png";
};
Visualiser.prototype.addReRollButton = function(){
    var rollButton = document.getElementById("rollButton");
    rollButton.innerHTML = "Re-Roll selected";
    rollButton.className = "btn btn-warning";
};
Visualiser.prototype.removeReRollButton = function(){
    var rollButton = document.getElementById("rollButton");
    rollButton.className = "btn btn-danger";
    rollButton.innerHTML = "Select Score";
};
Visualiser.prototype.changeBackToRollButton = function(){
    var rollButton = document.getElementById("rollButton");
    rollButton.className = "btn btn-success";
    rollButton.innerHTML = "Roll Dice";
}
Visualiser.prototype.selectDieForReRoll = function(i, value){
    document.getElementById("die" + i).src = "img/"+(value)+"sel.png";
};