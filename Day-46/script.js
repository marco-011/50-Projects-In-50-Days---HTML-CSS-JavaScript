const container = document.querySelector('.container');
const unsplashURL = 'https://picsum.photos/300/300?random=';
const rows = 100;

for (let i = 0; i < rows * 5; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}?sig=${Math.random()}`;
    container.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`; 
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}