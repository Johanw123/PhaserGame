
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

        moveMade = false;

        while(!moveMade)
        {
            var move = game.rnd.integerInRange(0,9);

            if(gridArray[move] === 0)
            {
                gridArray[move] = 2;
                spriteArray[move].alpha = 1;
                spriteArray[move].loadTexture('O');
                moveMade = true;
            }

        }

        /*
        for(var i = 0; i < 9; ++i)
        {
            if(gridArray[i] === 0)
            {
                gridArray[i] = 2;
                spriteArray[i].alpha = 1;
                spriteArray[i].loadTexture('O');
                return;
            }
        }
        */
    },

}
