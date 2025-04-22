const userNumber = document.querySelector('#canvasCount');
const canvas = document.querySelector('#canvas');

function createCanvas() {
    
    canvas.innerHTML = '';

    const count = parseInt(userNumber.value);
    for(let i = 0; i < count; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        canvas.appendChild(square);
    }
    
}

document.querySelector('#submitCanvasCount').addEventListener('click', (event) => {
    event.preventDefault();
    createCanvas();
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