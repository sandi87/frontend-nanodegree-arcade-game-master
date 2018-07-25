// Enemies our player must avoid

let points = 0;
const congratModal = document.getElementById("congratModal");
class Enemy {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  constructor(x, y, speed) {
    this.sprite = "images/enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if (this.x >= 505) {
      this.x = 0;
    }
    // checking for the collisions enemies with player
    if (
      player.x < this.x + 60 &&
      player.x + 60 > this.x &&
      player.y < this.y + 60 &&
      60 + player.y > this.y
    ) {
      player.x = 200;
      player.y = 400;
    }
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y) {
    this.sprite = "images/char-cat-girl.png";
    this.x = x;
    this.y = y;
    this.win = false;
  }
  // making our player not to go out of map
  update() {
    if (this.x >= 400) {
      this.x = 400;
    }
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y >= 400) {
      this.y = 400;
    }
    if (this.y <= -20) {
      this.x = 200;
      this.y = 400;
      points++;
      if (points === 3) {
        this.win = true;
        win();
      }
    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  // making our player to move in all directions (dir)
  handleInput(dir) {
    switch (dir) {
      case "left":
        this.update((this.x -= 101));
        break;
      case "up":
        this.update((this.y -= 83));
        break;
      case "right":
        this.update((this.x += 101));
        break;
      case "down":
        this.update((this.y += 83));
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
const firstEnemy = new Enemy(60, 60, 100);
allEnemies.push(firstEnemy);
const secondEnemy = new Enemy(200, 200, 100);
allEnemies.push(secondEnemy);
const thirdEnemy = new Enemy(250, 130, 100);
allEnemies.push(thirdEnemy);
const forthEnemy = new Enemy(-100, 60, 110);
allEnemies.push(forthEnemy);
const fifthEnemy = new Enemy(-800, 200, 150);
allEnemies.push(fifthEnemy);
const sixthEnemy = new Enemy(-1000, 130, 180);
allEnemies.push(sixthEnemy);
let player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
// initialize function winning the game and apearing modal
function win() {
  if ((this.win = true)) {
    congratModal.style.display = "block";
    window.addEventListener("click", function() {
      startNewGame();
    });
  }
}
function startNewGame() {
  location.reload();
}
