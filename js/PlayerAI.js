
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

    doMove: function(gridArray)
    {
        for(var i = 0; i < 9; ++i)
        {
            if(gridArray[i] == 0)
            {
                gridArray[i] = 2;
                return;
            }
        }
    },

}
