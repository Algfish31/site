document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};

const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const gameOverText = document.getElementById('gameOver');
        const finalScoreText = document.getElementById('finalScore');

        let player = { x: 180, y: 550, width: 40, height: 40 };
        let apples = [];
        let score = 0;
        let health = 5;

        function drawPlayer() {
            ctx.fillStyle = '#e3df8f';
            ctx.fillRect(player.x, player.y, player.width, player.height);
        }

        function drawApple(apple) {
            ctx.fillStyle = '#ff1c1c';
            ctx.beginPath();
            ctx.arc(apple.x, apple.y, apple.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        function updateApples() {
            if (Math.random() < 0.02) {
                apples.push({ x: Math.random() * (canvas.width - 20), y: 0, radius: 20 });
            }
            for (let i = 0; i < apples.length; i++) {
                apples[i].y += 4; // falling speed
                if (apples[i].y > canvas.height) {
                    apples.splice(i, 1);
                    health--; // Lose health for missed apple
                    i--;
                    if (health <= 0) {
                        gameOver();
                    }
                }
            }
        }

        function checkCollision() {
            for (let i = 0; i < apples.length; i++) {
                const apple = apples[i];
                if (
                    apple.x > player.x &&
                    apple.x < player.x + player.width &&
                    apple.y + apple.radius > player.y &&
                    apple.y - apple.radius < player.y + player.height
                ) {
                    apples.splice(i, 1);
                    score++;
                }
            }
        }

        function drawScore() {
            ctx.fillStyle = '#000';
            ctx.font = '20px Agdasima';
            ctx.fillText('Score: ' + score, 10, 20);
        }

        function drawHealth() {
            ctx.fillStyle = '#ff0000';
            ctx.font = '20px Agdasima';
            ctx.fillText('Health: ' + health, canvas.width - 100, 20);
        }

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPlayer();
            updateApples();
            apples.forEach(drawApple);
            drawScore();
            drawHealth();
            checkCollision();

            if (health > 0) {
                requestAnimationFrame(gameLoop);
            }
        }

        function gameOver() {
            finalScoreText.textContent = score;
            gameOverText.style.display = 'block';
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft' && player.x > 0) {
                player.x -= 20;
            } else if (event.key === 'ArrowRight' && player.x < canvas.width - player.width) {
                player.x += 20;
            }
        });

        gameLoop();