document.addEventListener('DOMContentLoaded', () => {
    const textToType = document.getElementById('text-to-type').innerText;
    const userInput = document.getElementById('user-input');
    const result = document.getElementById('result');
    const restartButton = document.getElementById('restart-game');

    let startTime;

    function startGame() {
        result.innerText = '';
        userInput.value = '';
        userInput.disabled = false;
        userInput.focus();
        startTime = new Date();
    }

    function checkTyping() {
        const typedText = userInput.value;
        if (typedText === textToType) {
            const endTime = new Date();
            const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
            result.innerText = `Congratulations! You typed the text correctly in ${timeTaken} seconds.`;
            userInput.disabled = true;
        }
    }

    userInput.addEventListener('input', checkTyping);
    restartButton.addEventListener('click', startGame);

    startGame(); // Initialize game on page load
});
