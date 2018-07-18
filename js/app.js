

// Enemies our player must avoid
class Enemy  {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speed = Math.floor((Math.random() * 200) + 100);
        this.sprite = 'images/enemy-bug.png';
    }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.sprite = "images/char-boy.png";
    };

    /*update(){
        function(dt) {

        }
    };

    render(){
        function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    };

    handleInput(key) {
        
    };*/
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let bug1 = new Enemy;
let bug2 = new Enemy;
let bug3 = new Enemy;
allEnemies = ['bug1','bug2','bug3'];
//player = ;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
