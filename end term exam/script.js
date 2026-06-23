let countdownInterval = null;

document.getElementById('startBtn').addEventListener('click', startCountdown);

function startCountdown() {
    const input = document.getElementById('userInput');
    const display = document.getElementById('display');
    let count = parseInt(input.value);

    if (isNaN(count) || count <= 0) {
        alert("Enter a number greater than 0");
        return;
    }

    const sequence = [];
    for (let i = count; i >= 1; i--) {
        sequence.push(i);
    }

    let index = 0;
    
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => {
        if (index < sequence.length) {
            display.innerText = sequence[index];
            index++;
        } else {
            clearInterval(countdownInterval);
            display.innerText = "Done!";
        }
    }, 1000);
}
