
Enemy = function (game, x, y) {

    Enemy.Sprite.call(this, game, x, y, 'hello');
    


};
Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;


Enemy.prototype.update = function() 
{
    this.angle += 1;
};

