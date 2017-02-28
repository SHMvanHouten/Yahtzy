
function YahtzyGame(names, visualiser, scoreChecker, scoreTypes, indexOfScoreTypesBottomScore){

    var scoreTypeChecker = [];
    var dice = [0,0,0,0,0];
    var hasNotChosenInput = false;
    var hasRolled = false;
    var reRollPhase = false;
    var reRollDice = [];
    var totalScoreTop = 0;
    var totalScoreTopAfterBonus = 0;
    var totalScoreBottom = 0;
    var totalScore = 0;

    function scoreTypeCheckerFiller(){
        for(var i = 0; i < scoreTypes.length; i++){
            scoreTypeChecker.push(true);
        };
    };

    var getRandomInt = function(max,min){
      return Math.floor(Math.random() * max) + min;
    };

    var processScore = function(score, typeIndex){
        if(typeIndex <= indexOfScoreTypesBottomScore){
            return processScoreTop(score);
        }
        else{
            return processScoreBottom(score);
        }

    };
    var processScoreTop =  function(score){
        totalScoreTop += score;
        var bonus = 0;
        if(totalScoreTop>63 && bonus ===0){
            bonus = 35;
            totalScore += bonus;
        }
        totalScoreTopAfterBonus = totalScoreTop + bonus;
        totalScore += score;
        visualiser.updateScoresTop(totalScoreTop, bonus, totalScoreTopAfterBonus);
        visualiser.updateTotalScore(totalScore);
    };


    var processScoreBottom =  function(score){
        totalScoreBottom += score;
        totalScore += score;
        visualiser.updateScoreBottom(totalScoreBottom);
        visualiser.updateTotalScore(totalScore);

    };

    this.rollDice = function(){
        if(reRollPhase){return this.reRoll();}
        else if(hasRolled){return};
        for(var i = 0; i < dice.length; i++){
            //6 and 1 being the highest and lowest possible die value
            dice[i] = getRandomInt(6,1);
        };
//        scoreChecker.inputDice(dice);
        visualiser.inputDice(dice);
        hasRolled = true;
        reRollPhase = true;
        visualiser.addReRollButton();
    };

    this.selectForReRoll = function(i){
        //if it's not the reRollPhase or the die has already been chosen, return empty;
        if (!reRollPhase){return}
        else if(reRollDice.indexOf(i)>-1){
            reRollDice.splice(reRollDice.indexOf(i), 1);
            return visualiser.changeDie(i, dice[i]);
        }

        reRollDice.push(i);
        visualiser.selectDieForReRoll(i, dice[i]);
    };
    this.reRoll = function(){
        for(var i = 0; i < reRollDice.length; i++){
            var value = getRandomInt(6,1);
            dice[reRollDice[i]] = value;
            visualiser.changeDie(reRollDice[i], value);
        };
        hasNotChosenInput = true;
        reRollPhase = false;
        reRollDice=[];
        scoreChecker.inputDice(dice);
        visualiser.removeReRollButton();
    };

    this.getScore = function(typeIndex){
        if(scoreTypeChecker[typeIndex]&&hasNotChosenInput){
            scoreTypeChecker[typeIndex]=false;
            hasNotChosenInput = false;
            hasRolled = false;
            var score = this["getScoreAs"+scoreTypes[typeIndex]]();
            visualiser.changeBackToRollButton();
            visualiser.addScore(typeIndex, score);
            return processScore(score, typeIndex);
        }
    };

    this.getScoreAsThreeOfAKind = function(){
        if(scoreChecker.isThreeOfAKind()){
        return scoreChecker.giveAllDiceValuesAddedUp();
        } else{return 0};
    };
    this.getScoreAsFourOfAKind = function(){
        if(scoreChecker.isFourOfAKind()){
        return scoreChecker.giveAllDiceValuesAddedUp();
        } else{return 0};
    };
    this.getScoreAsFullHouse = function() {
         if (scoreChecker.isFullHouse()){
                return 25 ;
            }
            else {
                return 0;
            }
    };
    this.getScoreAsSmallStraight = function() {
         if (scoreChecker.isSmallStraight()){
                return 30;
            }
            else {
                return 0;
            }
    };
    this.getScoreAsLargeStraight = function() {
         if (scoreChecker.isLargeStraight()){
                return 40;
            }
            else {
                return 0;
            }
    };
    this.getScoreAsYahtzy = function() {
         if (scoreChecker.isYahtzy()){
                return 50;
            }
            else {
                return 0;
            }
    };
    this.getScoreAsChance = function() {
         return scoreChecker.giveAllDiceValuesAddedUp();
    };
    this.getScoreAsOnes = function() {
         return scoreChecker.giveAddedUpXs(0);
    };
    this.getScoreAsTwos = function() {
         return scoreChecker.giveAddedUpXs(1);
    };
    this.getScoreAsThrees = function() {
         return scoreChecker.giveAddedUpXs(2);
    };
    this.getScoreAsFours = function() {
         return scoreChecker.giveAddedUpXs(3);
    };
    this.getScoreAsFives = function() {
         return scoreChecker.giveAddedUpXs(4);
    };
    this.getScoreAsSixes = function() {
         return scoreChecker.giveAddedUpXs(5);
    };



    scoreTypeCheckerFiller();
    visualiser.createPlayingField();
}