function YahtzyGame(names, visualiser, scoreChecker){
    var dice = []

    this.selectInput = function(choice){
        scoreChecker.inputDice(dice)
        return scoreChecker.getScoreAsLargeStraight(dice);
    };
    this.rollDice = function(input){
         dice = input;
    };
}

