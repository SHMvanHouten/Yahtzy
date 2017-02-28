
function YahtzyScoreCheck() {
    var dice;

	var totalScoreBottomHalf = 0;
	
    var contains = function(x) {
        return dice.indexOf(x) >= 0;
    };

    var countTheEyes = function(){
        var eyeCounter = [0,0,0,0,0,0];
        for (var i = 0 ; i< dice.length; i++){
            eyeCounter[dice[i]-1]++;
        }
        return eyeCounter;
    };
    var hasXOfAKind= function(x){
        var eyeCounter = countTheEyes();

        for (var j = 0 ; j<eyeCounter.length; j++) {
            if (eyeCounter[j] >=x){
                return true;
            }
        }
        return false;
    };
    var getFullHouseScore = function(){

    };
    this.getDice = function() {
        return dice
    };
    this.isTwoOfAKind = function(){
        return hasXOfAKind(2);
    };
    this.isThreeOfAKind = function(){
        return hasXOfAKind(3);
    };
    this.isFourOfAKind = function(){
        return hasXOfAKind(4);
    };
    this.isYahtzy = function(){
        return hasXOfAKind(5);
    };
    this.isFullHouse = function(){
        var eyeCounter = countTheEyes();
        return (eyeCounter.indexOf(2) > 0) && (eyeCounter.indexOf(3) > 0);

    };

    var checkConsecutiveNumbersStartingFromX = function(x, y) {
        var consecutive = true;
        var i = 0;
        while (consecutive && i < y) {
            consecutive = contains(x + i);
            i++;
        }
        return consecutive;

    };

    var containsFourConsecutiveNumberStartingFromX = function(x) {
        return checkConsecutiveNumbersStartingFromX(x, 4);
    };
    var containsFiveConsecutiveNumberStartingFromX = function(x) {
        return checkConsecutiveNumbersStartingFromX(x, 5);
    };

    this.isSmallStraight = function() {
        return containsFourConsecutiveNumberStartingFromX(1) ||
            containsFourConsecutiveNumberStartingFromX(2) ||
            containsFourConsecutiveNumberStartingFromX(3);
    };
    this.isLargeStraight = function () {
        return containsFiveConsecutiveNumberStartingFromX(1) ||
         containsFiveConsecutiveNumberStartingFromX(2);
    };

  	this.giveAllDiceValuesAddedUp = function() {
		var diceTotal = 0;
			for (var i = 0; i < dice.length; i++){
			diceTotal = diceTotal + dice[i];			
			};
		return diceTotal;
	};
	
	var countTheXs = function(eyes){
		var eyeCounter = countTheEyes();
		return eyeCounter[eyes];
	};
	
	this.giveAddedUpXs = function(x){
		return countTheXs(x) * (x + 1);
	};
	
	this.checkForWrongNumbers = function(){
		if (dice[4] > 6 || dice[0] <1 ){
			return true;
		}
	};
	

	this.inputDice = function(diceInput){
	    dice = diceInput.sort();
	};
};

YahtzyScoreCheck.prototype.showDice = function() {
    return this.getDice();
};

//YahtzyScoreCheck.prototype.getScoreAsThreeOfAKind = function(){
//	if(this.isThreeOfAKind()){
//	return this.giveAllDiceValuesAddedUp();
//	} else{return 0};
//};
//YahtzyScoreCheck.prototype.getScoreAsFourOfAKind = function(){
//	if(this.isFourOfAKind()){
//	return this.giveAllDiceValuesAddedUp();
//	} else{return 0};
//};
//YahtzyScoreCheck.prototype.getScoreAsFullHouse = function() {
//     if (this.isFullHouse()){
//            return 25 , this.addScoreBottomHalf(25);
//        }
//        else {
//            return 0;
//        }
//};
//YahtzyScoreCheck.prototype.getScoreAsSmallStraight = function() {
//     if (this.isSmallStraight()){
//            return 30;
//        }
//        else {
//            return 0;
//        }
//};
//YahtzyScoreCheck.prototype.getScoreAsLargeStraight = function() {
//     if (this.isLargeStraight()){
//            return 40;
//        }
//        else {
//            return 0;
//        }
//};
//YahtzyScoreCheck.prototype.getScoreAsYahtzy = function() {
//     if (this.isYahtzy()){
//            return 50;
//        }
//        else {
//            return 0;
//        }
//};
//YahtzyScoreCheck.prototype.getScoreAsChance = function() {
//	 return this.giveAllDiceValuesAddedUp();
//};
//YahtzyScoreCheck.prototype.getScoreAsOnes = function() {
//	 return this.giveAddedUpXs(0);
//};
//YahtzyScoreCheck.prototype.getScoreAsTwos = function() {
//	 return this.giveAddedUpXs(1);
//};
//YahtzyScoreCheck.prototype.getScoreAsThrees = function() {
//	 return this.giveAddedUpXs(2);
//};
//YahtzyScoreCheck.prototype.getScoreAsFours = function() {
//	 return this.giveAddedUpXs(3);
//};
//YahtzyScoreCheck.prototype.getScoreAsFives = function() {
//	 return this.giveAddedUpXs(4);
//};
//YahtzyScoreCheck.prototype.getScoreAsSixes = function() {
//	 return this.giveAddedUpXs(5);
//};
YahtzyScoreCheck.prototype.checkForIncorrectInput = function() {
	 return this.checkForWrongNumbers();
};
YahtzyScoreCheck.prototype.showScoreBottomHalf = function() {
	 return this.getScoreBottomHalf();
};





