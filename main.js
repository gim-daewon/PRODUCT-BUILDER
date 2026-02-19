
document.getElementById('generate-btn').addEventListener('click', () => {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = '';
    const numbers = new Set();

    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');
            numberDiv.textContent = number;
            numberDiv.style.transform = 'scale(0)';
            numberDiv.style.backgroundColor = getNumberColor(number);
            numbersContainer.appendChild(numberDiv);
            setTimeout(() => {
                numberDiv.style.transform = 'scale(1)';
            }, 10);
        }, index * 100);
    });
});

function getNumberColor(number) {
    if (number <= 10) return '#f4b400'; // Yellow
    if (number <= 20) return '#4285f4'; // Blue
    if (number <= 30) return '#db4437'; // Red
    if (number <= 40) return '#0f9d58'; // Green
    return '#6a1b9a'; // Purple
}
