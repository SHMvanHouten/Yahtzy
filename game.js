function YahtzyGame(names, visualiser, scoreChecker, scoreTypes){

    this.selectInput = function(choice){
        scoreChecker.inputDice(dice);
        return this["getScoreAs"+choice]();
    };

    this.rollDice = function(input){
        input = [1,2,3,4,5];
//         dice = input;
        scoreChecker.inputDice(input);
        visualiser.inputDice(input);
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
                return 25 , scoreChecker.addScoreBottomHalf(25);
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
    this.checkForIncorrectInput = function() {
         return scoreChecker.checkForWrongNumbers();
    };
    console.log(scoreTypes);
    visualiser.createPlayingField(scoreTypes);
}