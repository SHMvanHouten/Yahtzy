describe("yahtzyGame", function(){
    beforeEach(function(){
        function newGame(){
            var playerNames = ["player1", "player2"];
            var scoreTypes = ["Ones","Twos","Threes","Fours","Fives","Sixes","ThreeOfAKind","FourOfAKind","Yahtzy","FullHouse","SmallStraight","LargeStraight","Chance"];
            var visualiser = new Visualiser();
            var scoreChecker = new YahtzyScoreCheck();
            return new YahtzyGame(playerNames, visualiser, scoreChecker, scoreTypes);

        };
        game = new newGame;
    })
    it("should return the score for input of dice and input of straight", function(){
        game.rollDice([1,2,3,4,5]);
        expect(game.selectInput("LargeStraight")).toEqual(40);
    })
    it("should return the score for input of dice and input of full house", function(){
        game.rollDice([3,3,3,4,4]);
        expect(game.selectInput("FullHouse")).toEqual(25);
    })

})