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
                var row = playingField.insertRow(-1);
                row.id = "row"+i;
                row.className = "success";
                row.addEventListener("click", function(){game.getScore(i)},false);
                var cellForScoreType = row.insertCell();
                cellForScoreType.innerHTML = scoreTypes[i];
                var cellForScore = row.insertCell();
                cellForScore.innerHTML = 0;
                cellForScore.id ="score" + i;
            };
    };

    this.getScoringCells = function(playingField, description, id){
        for(var i = 0; i < description.length; i++){
            var scoreRow = playingField.insertRow(-1);
            var scoreCellDescription = scoreRow.insertCell();
            scoreCellDescription.innerHTML = description[i];
            var scoreCell = scoreRow.insertCell();
            scoreCell.id = id[i];
            scoreCell.innerHTML = 0;
        };

    };

};
Visualiser.prototype.createPlayingField = function(scoreTypes){
    var body = document.getElementsByTagName("body")[0];

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
    body.appendChild(diceField);

    var playingField = document.createElement("table");
    playingField.class = "table";

    this.getScoreTypeCells("top", playingField);

    this.getScoringCells(playingField, ["TOTAL", "BONUS (total>63)", "TOTAL for top"], ["cellForTopRowScore", "cellForBonusScore", "cellForTotalScoreTop"]);

    this.getScoreTypeCells("bottom", playingField);

    this.getScoringCells(playingField, ["TOTAL top", "TOTAL BOTTOM", "TOTAL SCORE"], ["cellForTopScoreAtBottom", "cellForBottomScore", "cellForTotalScore"])

    body.appendChild(playingField)
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
Visualiser.prototype.updateScoresTop = function(totalScoreTop, bonus, totalScoreTopAfterBonus){
    document.getElementById("cellForTopRowScore").innerHTML = totalScoreTop;
    if(bonus>0){document.getElementById("cellForBonusScore").innerHTML = bonus;};
    document.getElementById("cellForTotalScoreTop").innerHTML = totalScoreTopAfterBonus;
    document.getElementById("cellForTopScoreAtBottom").innerHTML = totalScoreTopAfterBonus;

};

Visualiser.prototype.updateScoreBottom = function(totalScoreBottom){
    document.getElementById("cellForBottomScore").innerHTML = totalScoreBottom;
};

Visualiser.prototype.updateTotalScore = function(totalScore){
    document.getElementById("cellForTotalScore").innerHTML = totalScore;
}