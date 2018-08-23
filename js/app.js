/* ----Declaring variables----*/
let scoreCurrent = 0;
const scoreUpdate = document.querySelector('.score');
let allEnemies = [];
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var winModal = document.getElementById('win-modal');

// Start the game
(function startGame() {
    window.onload = function(e) {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (Play), close the modal
    span.onclick = function() {
        modal.style.display = "none";
}})();

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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    update(dt) {
        this.x += this.speed * dt; //they move only in x-axis
        if (this.x > 505) {
            this.x = -50;
        } 
        //Check for collision
        if (player.x < this.x + 65 && player.x + 35 > this.x &&
            player.y < this.y + 50 && 50 + player.y > this.y) {
                player.x = 200;
                player.y = 400;
                //Remove a point when collision occurs
                if (scoreCurrent != 0 && scoreCurrent > 0) {
                    scoreCurrent--;
                    scoreUpdate.textContent = 'Score: ' + scoreCurrent;
                }  
        }
        //End the game  
        if (scoreCurrent  === 10) {
            winModal.style.display = "block";
            scoreCurrent = 0;
            allEnemies = [];

        }     
        
    };
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor (x,y,speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = "images/char-boy.png";
    };

    update(dt){

        if (this.y > 380) {
        this.y = 380;
        }

        if (this.x > 400) {
        this.x = 400;
        }

        if (this.x < 0) {
        this.x = 0;
        }

        // Check for player reaching top of canvas and winning the game
        if (this.y < 0) {
            this.x = 200;
            this.y = 400;
            scoreCurrent++;
            scoreUpdate.textContent = 'Score: ' + scoreCurrent;
            
            
        }
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    handleInput(key) {
        switch(key) {
            case 'left':
                this.x -= 50;
                break;
            case 'right':
                this.x += 50;
                break;
            case 'up':
                this.y -= 50;
                break;
            case 'down':
                this.y += 50;
                break;        
        }
    };
}


/* ----Instantiate your objects----*/

// y position of all enemies
yPosition = [60,140,230];
yPosition.forEach(function(y) {
    bug = new Enemy(0, y, Math.floor((Math.random() * 200) + 100))
    allEnemies.push(bug); // put all the bugs in the allEnemies array
})

// Place the player object in a variable called player
player = new Player(200, 400, 50);


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


