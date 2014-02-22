// We start by initializing Phaser
// Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
var game = new Phaser.Game(500, 600, Phaser.Auto, 'phaser-example');




var player;
var enemy;


// This is an array to store the different states of our game. A state is a specific scene of a game like a menu, a game over screen, etc.
var game_state = {};

// And now we define our first and only state, I'll call it 'main' 
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() {
        // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
        
        // Load a sprite in the game
        // Parameters: name of the sprite, path to the image
        game.load.image('hello', '../assets/hello.png');  
    },

    create: function() { 
        // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.
        
        // Display a sprite on the screen
        // Parameters: x position, y position, name of the sprite
        this.hello_sprite = game.add.sprite(250, 300, 'hello'); 
        //this.Player = game.add.sprite(150,200, 'hello');
        
        
        player = new Player(game, 200, 300);
        player.anchor.setTo(0.5, 0.5);

        game.add.existing(player);
        
        
       // for (var i = 0; i < 10; i++) {
            enemy = new Enemy(game, 100, 300);
            enemy.anchor.setTo(0.5, 0.5);
            game.add.existing(enemy);
        //}
    },

    update: function() {
        // This is where we will spend the most of our time. This function is called 60 times per second to update the game.
        // Increase the angle of the sprite by one degree
        this.hello_sprite.angle += 1;
        //player.update();
    } 
}

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', game_state.main);  
game.state.start('main');