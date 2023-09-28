document.addEventListener('DOMContentLoaded', () => {
    const shark = document.getElementById('shark');
    const integration = document.getElementById('integration');
    const startButton = document.getElementById('start-button');

    let isPlaying = false;
    let score = 0;

    startButton.addEventListener('click', startGame);
    document.addEventListener('keydown', jump);

    function startGame() {
        startButton.style.display = 'none';
        document.addEventListener('keydown', jump);
        isPlaying = true;
        animateIntegration();
    }

    function jump(event) {
        if (event.keyCode === 32 && !isPlaying) {
            isPlaying = true;
            shark.style.animation = 'none';
            shark.style.transform = 'translateY(-50px)';
            setTimeout(() => {
                shark.style.transform = 'translateY(0)';
                shark.style.animation = 'swim 0.5s infinite alternate';
                isPlaying = false;
            }, 500);
        }
    }

    function animateIntegration() {
        if (isPlaying) {
            const randomPosition = Math.random() * 280;
            integration.style.left = randomPosition + 'px';
            integration.style.animation = 'move 2s linear forwards';
            integration.addEventListener('animationend', () => {
                integration.style.animation = 'none';
                score++;
                if (score % 5 === 0) {
                    increaseDifficulty();
                }
                document.getElementById('score').textContent = 'Score: ' + score;
                animateIntegration();
            });
        }
    }

    function increaseDifficulty() {
        // You can make the game more challenging by adjusting animation speed, adding more obstacles, etc.
    }
});
