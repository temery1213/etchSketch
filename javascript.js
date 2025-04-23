const userNumber = document.querySelector('#canvasCount');
const canvas = document.querySelector('#canvas');

function createCanvas() {
    canvas.innerHTML = '';

    const count = parseInt(userNumber.value);
    canvas.style.setProperty('--squares-per-row', count);

    const totalSquares = count * count;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        let currentOpacity = 0;

        square.addEventListener('mouseenter', () => {
            currentOpacity += 0.1;
            currentOpacity = Math.min(currentOpacity, 1);
            square.style.backgroundColor = `rgba(26, 25, 25, ${currentOpacity})`;
        });

        canvas.appendChild(square);
    }
}

function createRandomCanvas() {
    canvas.innerHTML = '';

    const count = parseInt(userNumber.value);
    canvas.style.setProperty('--squares-per-row', count);

    const totalSquares = count * count;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        let currentOpacity = 0;

        square.addEventListener('mouseenter', () => {
            currentOpacity += 0.1;
            currentOpacity = Math.min(currentOpacity, 1);
            
            const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            const r = parseInt(randomColor.slice(0, 2), 16);
            const g = parseInt(randomColor.slice(2, 4), 16);
            const b = parseInt(randomColor.slice(4, 6), 16);
            
            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
        });

        canvas.appendChild(square);
    }
}

document.querySelector('#submitCanvasCount').addEventListener('click', (event) => {
    event.preventDefault();
    createCanvas();
});

document.querySelector('#randomColor').addEventListener('click', (event) => {
    event.preventDefault();
    createRandomCanvas();
});

function resetCanvas() {
    document.querySelector('#canvas').innerHTML = '';
}



    userNumber.addEventListener('input', () => {
        if (userNumber.value > 100) {
            userNumber.value = 100;
        } else if (userNumber.value < 1) {
            userNumber.value = 1;
    }
})
