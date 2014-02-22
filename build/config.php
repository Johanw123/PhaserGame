<?php
    //  All JS files in build order.
    //  Much easier for debugging re: line numbers
    if (!isset($path))
    {
        $path = '..';
    }

    echo <<<EOL

    <script src="$path/libs/phaser.js"></script>
    <script src="$path/js/Player.js"></script>
    <script src="$path/js/Enemy.js"></script>
    
    
    
    
    <script src="$path/js/main.js"></script>
EOL;
?>
