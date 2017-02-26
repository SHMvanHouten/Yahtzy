function YahtzeeGame(names, visualiser, scoreChecker){
    var dice = []

}

YahtzeeGame.prototype.rollDice = function(){
     dice = [1,2,3,4,5]
};
YahtzeeGame.prototype.selectInput = function(){
    return scoreChecker.getScoreAsFullHouse();

};