
var cursors;
var fireButton;

Player = function (game, x, y)
{

    Phaser.Sprite.call(this, game, x, y, 'hello');
    
      //  And some controls to play the game with

    cursors = game.input.keyboard.createCursorKeys();

    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


};
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.update = function() 
{

    if (cursors.left.isDown)
    {
        this.position.x--;
    }
    else if (cursors.right.isDown)

    {
        this.position.x++;
    }

    //  Firing?
    if (fireButton.isDown)
    {
        this.angle += 1;
    }

};

