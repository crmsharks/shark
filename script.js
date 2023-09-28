document.addEventListener('DOMContentLoaded', () => {
    const shark = document.getElementById('shark');
    const integration = document.getElementById('integration');
    const startButton = document.getElementById('start-button');
    const scoreDisplay = document.getElementById('score');

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
            const randomPosition = Math.random() * 60 + 20;
            integration.style.top = randomPosition + 'px';
            integration.style.animation = 'moveIntegration 4s linear forwards';
            integration.addEventListener('animationend', () => {
                integration.style.animation = 'none';
                score++;
                scoreDisplay.textContent = 'Score: ' + score;
                animateIntegration();
            });
        }
    }
});
