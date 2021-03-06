// We start by initializing Phaser
// Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
var game = new Phaser.Game(750, 600, Phaser.AUTO, 'phaser-example');
//var game = new Phaser.Game(320, 416, Phaser.CANVAS, "content",{ preload: preload, create: create, update: update, render: render });

var grid;
var player;


// This is an array to store the different states of our game. A state is a specific scene of a game like a menu, a game over screen, etc.
var game_state = {};

// And now we define our first and only state, I'll call it 'main'
game_state.main = function() { };
game_state.main.prototype = {

    preload: function() {


        game.load.image('hello', 'assets/hello.png');
        game.load.image('hello2', 'assets/hello2.png');
        game.load.image('X', 'assets/X.png');
        game.load.image('O', 'assets/O.png');
        game.load.image('Win', 'assets/Win.png');
        game.load.image('Lose', 'assets/Lose.png');
        game.load.image('Draw', 'assets/Draw.png');
        
        grid = new Grid(game);
    },

    create: function() {
        this.game.stage.backgroundColor = '#FFFFFF';
        //game.add.existing(grid);
        grid.make();

    },

    update: function() {

        grid.update();
    },
    
};






// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', game_state.main);
game.state.start('main');
