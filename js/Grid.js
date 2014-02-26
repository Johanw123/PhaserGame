var player;
var playerai;


Grid = function (game)
{

    Phaser.Group.call(this, game);

      //  And some controls to play the game with
    this.game = game;
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
var gameOver = false;
var cellLength = 750/3;
var cellHeight = 600/3;
var cellLengthHalf = cellLength/2;
var cellHeightHalf = cellHeight/2;
var overlaySprite;

Grid.prototype.update = function()
{
  
    

};

Grid.prototype.render = function()
{

    for(var i = 0; i < 9; ++i)
    {
        if(i < 3)
            game.debug.renderText(gridArray[i], cellLengthHalf + cellLength * i, cellHeightHalf);
        else if(i < 6)
            game.debug.renderText(gridArray[i], cellLengthHalf + cellLength * (i - 3), cellHeight + cellHeightHalf);
        else if(i < 9)
            game.debug.renderText(gridArray[i], cellLengthHalf + cellLength * (i - 6), cellHeight + cellHeight + cellHeightHalf);
    }
};

Grid.prototype.make = function()
{
    var item;
    spriteArray = new Array();
    
    var x;
    var y;
    var heightCount = -1;
    var lengthCount = 3;
    
    for (var i = 0; i < 9; i++) {
        
        if(i % 3 == 0)
        {
            ++heightCount;
            lengthCount -= 3;
        }
        
        x = cellLength * (i + lengthCount);
        y = cellHeight * heightCount;
        
        item = this.create(x, y, 'hello2', i);
        item.input.start(0, true);
        item.mark = " ";
        item.arrayIndex = i;
        item.events.onInputDown.add(select);
        this.getAt(i).alpha = 0.25;
        spriteArray[i] = item;
    }

};

function select(item, pointer)
{
    if(gameOver)
        return;
    
    if(gridArray[item.arrayIndex] === 0)
    {
        item.alpha = 1;
        item.mark = "X";
        item.loadTexture('X');
        gridArray[item.arrayIndex] = 1;
        checkWinningCondition();
        
        if(!gameOver)
        {
            playerai.doMove(gridArray, spriteArray);
            checkWinningCondition();
        }
    }
}

function checkWinningCondition()
{
     //check for winner/loser/tie
    var winner = 0;
  
    
    if(gridArray[0] == gridArray[1])
    {
        if(gridArray[1] == gridArray[2])
        {
            //winner
            winner = gridArray[0];
        }
    }
    if(gridArray[3] == gridArray[4])
    {
        if(gridArray[4] == gridArray[5])
        {
            //winner
            winner = gridArray[3];
        }
    }
    if(gridArray[6] == gridArray[7])
    {
        if(gridArray[7] == gridArray[8])
        {
            //winner
            winner = gridArray[6];
        }
    }
    
    if(gridArray[0] == gridArray[3])
    {
        if(gridArray[3] == gridArray[6])
        {
            //winner
            winner = gridArray[0];
        }
    }
    if(gridArray[1] == gridArray[4])
    {
        if(gridArray[4] == gridArray[7])
        {
            //winner
            winner = gridArray[1];
        }
    }
    if(gridArray[2] == gridArray[5])
    {
        if(gridArray[5] == gridArray[8])
        {
            //winner
            winner = gridArray[2];
        }
    }
    
    //diag
    if(gridArray[0] == gridArray[4])
    {
        if(gridArray[4] == gridArray[8])
        {
            //winner
            winner = gridArray[0];
        }
    }
    if(gridArray[2] == gridArray[4])
    {
        if(gridArray[4] == gridArray[6])
        {
            //winner
            winner = gridArray[2];
        }
    }
    
    var isDraw = true;
    //draw
    for (var i = 0; i < 9; i++)
    {
        if(gridArray[i] === 0)
        {
            isDraw = false;
            break;
        }
    }

    if(winner == 1)
    {
        gameOver = true;
        overlaySprite = this.game.add.sprite(0, 0, 'Win');
        overlaySprite.input.start(0, true);
        overlaySprite.events.onInputDown.add(reset);
    }
    else if(winner == 2)
    {
        gameOver = true;
        overlaySprite = this.game.add.sprite(0, 0, 'Lose');
        overlaySprite.input.start(0, true);
        overlaySprite.events.onInputDown.add(reset);
    }
    else if(isDraw)
    {
        gameOver = true;
        overlaySprite = this.game.add.sprite(0, 0, 'Draw');
        overlaySprite.input.start(0, true);
        overlaySprite.events.onInputDown.add(reset);
    }
}

function reset()
{
    for (var i = 0; i < 9; i++) {
        spriteArray[i].loadTexture('hello2');
    }
    for (var i = 0; i < 9; i++) {
        gridArray[i] = 0;
    }
    
    gameOver = false;
    overlaySprite.kill();

}


