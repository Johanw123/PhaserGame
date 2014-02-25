
PlayerAI = function(game) {

	this.game = game;

};

PlayerAI.prototype = {

    preload: function () {

	},

	create: function () {

	},

	update: function() {


    },

    doMove: function(gridArray, spriteArray)
    {
        for(var i = 0; i < 9; ++i)
        {
            if(gridArray[i] == 0)
            {
                gridArray[i] = 2;
                spriteArray[i].alpha = 1;
                spriteArray[i].mark = "O";
                spriteArray[i].loadTexture('O');
                return;
            }
        }
    },

}
