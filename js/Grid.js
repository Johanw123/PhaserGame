var player;
var playerai;


Grid = function (game)
{

    Phaser.Group.call(this, game);

      //  And some controls to play the game with

    player = new Player(game);
    playerai = new PlayerAI(game);


};
Grid.prototype = Object.create(Phaser.Group.prototype);
Grid.prototype.constructor = Grid;

var gridArray = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

var spriteArray;

Grid.prototype.update = function()
{
    //check for winner/loser/tie

};

Grid.prototype.render = function()
{

    for(var i = 0; i < 9; ++i)
    {
        if(i < 3)
            game.debug.renderText(gridArray[i], 150 + 168 * i, 150);
        else if(i < 6)
            game.debug.renderText(gridArray[i], 150 + 168 * (i - 3), 318);
        else if(i < 9)
            game.debug.renderText(gridArray[i], 150 + 168 * (i - 6), 518);
    }
};

Grid.prototype.make = function()
{
    var item;
    spriteArray = new Array();
    var cellLength = 750/3;
    var cellHeight = 600/3;
    var cellLengthHalf = cellLength/2;
    var cellHeightHalf = cellHeight/2;

    for (var i = 0; i < 3; i++)
    {
        
        item = this.create(cellLength * i, 0, 'hello2', i);
        // Enable input.
        item.input.start(0, true);
        item.mark = " ";
        item.arrayIndex = i;
        item.events.onInputDown.add(select);
        this.getAt(i).alpha = 0.25;
        spriteArray[i] = item;
    }

    for (var i = 0; i < 3; i++)
    {
        item = this.create(cellLength * i, cellHeight, 'hello2', i + 3);
        // Enable input.
        item.input.start(0, true);
        item.mark = " ";
        item.arrayIndex = i + 3;
        item.events.onInputDown.add(select);
        this.getAt(i + 3).alpha = 0.25;
        spriteArray[i + 3] = item;
    }

    for (var i = 0; i < 3; i++)
    {
        item = this.create(cellLength * i, cellHeight*2, 'hello2', i + 6);
        // Enable input.
        item.input.start(0, true);
        item.mark = " ";
        item.arrayIndex = i + 6;
        item.events.onInputDown.add(select);
        this.getAt(i + 6).alpha = 0.25;
        spriteArray[i + 6] = item;
    }

};

function select(item, pointer)
{
    if(gridArray[item.arrayIndex] == 0)
    {
        item.alpha = 1;
        item.mark = "X";
        item.loadTexture('X');
        gridArray[item.arrayIndex] = 1;
        playerai.doMove(gridArray, spriteArray);
    }
}
