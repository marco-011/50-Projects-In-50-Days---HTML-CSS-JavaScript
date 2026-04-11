// feat: initialize canvas drawing app with controls (color, size, clear)

// Select canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Select UI controls
const clearBtn = document.querySelector('#clear');     // clear canvas button
const colorEl = document.getElementById('color');      // color picker
const increaseBtn = document.getElementById('increase'); // increase brush size
const decreaseBtn = document.getElementById('decrease'); // decrease brush size
const sizeEl = document.getElementById('size');        // size display

// Set canvas dimensions to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize drawing settings
let size = 20;          // default brush size
let ispressed = false;  // track mouse press state
let color = 'black';    // default brush color
let X;
let y;

// feat: enable dynamic color change using color picker
colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

// Start drawing on mouse down
canvas.addEventListener('mousedown', (e) => {
    ispressed = true;
    X = e.offsetX;
    y = e.offsetY;
});

// Stop drawing on mouse up
canvas.addEventListener('mouseup', () => {
    ispressed = false;
    X = undefined;
    y = undefined;
});

// feat: implement smooth drawing using circle + line technique
canvas.addEventListener('mousemove', (e) => {
    if (ispressed) {
        const X2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(X2, y2);
        drawLine(X, y, X2, y2);

        X = X2;
        y = y2;
    }
});

// feat: add clear canvas functionality
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Draw filled circle (brush effect)
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
}

// Draw line for smooth stroke
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// feat: display current brush size
function updateSize() {
    sizeEl.innerText = size;
}

// feat: increase brush size with max limit
increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) size = 50;
    updateSize();
});

// feat: decrease brush size with min limit
decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5) size = 5;
    updateSize();
});
