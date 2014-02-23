

Grid = function (game)
{

    Phaser.Group.call(this, game);

      //  And some controls to play the game with



};
Grid.prototype = Object.create(Phaser.Group.prototype);
Grid.prototype.constructor = Grid;


Grid.prototype.make = function()
{
    var item;

    for (var i = 0; i < 3; i++)
    {
        item = this.create(150 + 168 * i, 150, 'hello', i);
        // Enable input.
        item.input.start(0, true);
        item.marked = false:
        item.events.onInputDown.add(select);
        item.events.onInputUp.add(release);
        item.events.onInputOut.add(moveOff);
        this.getAt(i).alpha = 0.25;
    }

    for (var i = 0; i < 3; i++)
    {
        item = this.create(150 + 168 * i, 318, 'hello', i + 3);
        // Enable input.
        item.input.start(0, true);
        item.marked = false:
        item.events.onInputDown.add(select);
        item.events.onInputUp.add(release);
        item.events.onInputOut.add(moveOff);
        this.getAt(i + 3).alpha = 0.25;
    }

    for (var i = 0; i < 3; i++)
    {
        item = this.create(150 + 168 * i, 518, 'hello', i + 3);
        // Enable input.
        item.input.start(0, true);
        item.marked = false:
        item.events.onInputDown.add(select);
        item.events.onInputUp.add(release);
        item.events.onInputOut.add(moveOff);
        this.getAt(i + 6).alpha = 0.25;
    }
}


function select(item, pointer) {

   //if(!item.marked)
   //{
        item.alpha = 1;
        item.marked = true;
   //}

}

function release(item, pointer) {


        //item.alpha = .25;

}

function moveOff(item, pointer) {


        //item.alpha = .25;


}
