describe("YahtzyScoreCheck", function () {
	it("returns the values 2,3,4,5,1 of the five dice", function () {
		var game = new YahtzyScoreCheck(2, 3, 4, 5, 1);
		expect(game.showDice()).toEqual([1, 2, 3, 4, 5]);
	});

	it("should score 25 for a fullhouse", function () {
		var game = new YahtzyScoreCheck(2, 2, 3, 3, 3);
		expect(game.getScoreAsFullHouse()).toBe(25);
	});
	it("should score 0 for not a fullhouse", function () {
		var game = new YahtzyScoreCheck(2, 2, 3, 3, 5);
		expect(game.getScoreAsFullHouse()).toBe(0);
	});
	
	it("should not give two of a kind when 6 dice are input and the last two are a pair", function () {
		var game = new YahtzyScoreCheck(1, 2, 3, 4, 5, 5);
		expect(game.isTwoOfAKind()).toBeFalsy();
	});

	it("should give a score of 18 when three of a kind is chosen", function () {
		var game = new YahtzyScoreCheck(3, 3, 3, 4, 5);
		expect(game.getScoreAsThreeOfAKind()).toEqual(18);
	});
	it("should give a score of 0 when three of a kind is chosen", function () {
		var game = new YahtzyScoreCheck(3, 3, 2, 4, 6);
		expect(game.getScoreAsThreeOfAKind()).toEqual(0);
	});
	
	it("should give a score of 13 when four of a kind is chosen", function () {
		var game = new YahtzyScoreCheck(3, 3, 3, 3, 1);
		expect(game.getScoreAsFourOfAKind()).toEqual(13);
	});
	it("should give a score of 0 when four of a kind is chosen", function () {
		var game = new YahtzyScoreCheck(3, 3, 3, 2, 1);
		expect(game.getScoreAsFourOfAKind()).toEqual(0);
	});
	it("should give a score of 30 when small straight is chosen", function () {
		var game = new YahtzyScoreCheck(1, 2, 3, 4, 6);
		expect(game.getScoreAsSmallStraight()).toEqual(30);
	});
	it("should give a score of 0 when small straight is chosen", function () {
		var game = new YahtzyScoreCheck(1, 2, 3, 5, 6);
		expect(game.getScoreAsSmallStraight()).toEqual(0);
	});
	
	it("should give a score of 40 when large straight is chosen", function () {
		var game = new YahtzyScoreCheck(1, 2, 3, 4, 5);
		expect(game.getScoreAsLargeStraight()).toEqual(40);
	});
	it("should give a score of 0 when large straight is chosen", function () {
		var game = new YahtzyScoreCheck(1, 2, 3, 4, 6);
		expect(game.getScoreAsLargeStraight()).toEqual(0);
	});
	it("should give a score of 50 when yahtzy is chosen", function () {
		var game = new YahtzyScoreCheck(1, 1, 1, 1, 1);
		expect(game.getScoreAsYahtzy()).toEqual(50);
	});
	it("should give a score of 0 when yahtzy is chosen", function () {
		var game = new YahtzyScoreCheck(1, 1, 1, 1, 2);
		expect(game.getScoreAsYahtzy()).toEqual(0);
	});
	it("should give a score of 21 when chance is chosen", function () {
		var game = new YahtzyScoreCheck(3, 5, 6, 3, 4);
		expect(game.getScoreAsChance()).toEqual(21);
	});
	
	it("should give a score of 3 when ones is chosen", function () {
		var game = new YahtzyScoreCheck(1, 1, 1, 4, 5);
		expect(game.getScoreAsOnes()).toEqual(3);
	});
	it("should give a score of 4 when twos is chosen", function () {
		var game = new YahtzyScoreCheck(2, 1, 1, 2, 5);
		expect(game.getScoreAsTwos()).toEqual(4);
	});
	it("should give a score of 9 when threes is chosen", function () {
		var game = new YahtzyScoreCheck(3, 1, 1, 3, 3);
		expect(game.getScoreAsThrees()).toEqual(9);
	});
	it("should give a score of 8 when fours is chosen", function () {
		var game = new YahtzyScoreCheck(2, 1, 4, 3, 4);
		expect(game.getScoreAsFours()).toEqual(8);
	});
	it("should give a score of 20 when fives is chosen", function () {
		var game = new YahtzyScoreCheck(5, 5, 4, 5, 5);
		expect(game.getScoreAsFives()).toEqual(20);
	});
	it("should give a score of 12 when sixes is chosen", function () {
		var game = new YahtzyScoreCheck(2, 6, 4, 3, 6);
		expect(game.getScoreAsSixes()).toEqual(12);
	});
	it("should give a score of 35 when chance is chosen", function () {
		var game = new YahtzyScoreCheck(7, 7, 7, 7, 7);
		expect(game.getScoreAsChance()).toEqual(35);
	});
	it ("should trigger incorrect input when dice number x is not x > 6", function(){
		var game = new YahtzyScoreCheck(7, 3, 2, 3, 2);
		expect(game.checkForIncorrectInput()).toBeTruthy()
	});
	it ("should trigger incorrect input when dice number  x < 6", function(){
		var game = new YahtzyScoreCheck(0, 3, 2, 3, 2);
		expect(game.checkForIncorrectInput()).toBeTruthy()
	});
	it ("should give bottom half score", function(){
		var game = new YahtzyScoreCheck(2, 3, 2, 3, 3);
		game.getScoreAsFullHouse();
		expect(game.showScoreBottomHalf()).toEqual(25)
	});
	
	
	
	
	

});
