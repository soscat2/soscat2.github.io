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
        userInput.style.backgroundColor = ''; // Reset background color
        userInput.classList.remove('correct', 'incorrect');
        userInput.style.color = ''; // Reset text color
    }

    function checkTyping() {
        const typedText = userInput.value;
        let highlightedText = '';
        
        for (let i = 0; i < typedText.length; i++) {
            if (i >= textToType.length) {
                highlightedText += `<span class="incorrect">${typedText[i]}</span>`;
            } else if (typedText[i] === textToType[i]) {
                highlightedText += `<span class="correct">${typedText[i]}</span>`;
            } else {
                highlightedText += `<span class="incorrect">${typedText[i]}</span>`;
            }
        }

        for (let i = typedText.length; i < textToType.length; i++) {
            highlightedText += `<span>${textToType[i]}</span>`;
        }

        userInput.innerHTML = highlightedText;

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
