

Player = function(game) {

	this.game = game;

};

Player.prototype = {

    preload: function () {

	},

	create: function () {

	},

	update: function() {


    },


    select: function(item, pointer)
    {
        if(item.mark = ' ')
        {
            item.alpha = 1;
            item.mark = 'X';
            //gridArray[item.arrayIndex] = 'X';
        }

    },



}
