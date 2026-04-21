const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

// Handle rating click
ratingsContainer.addEventListener('click', (e) => {
    const rating = e.target.closest('.rating');

    if (rating) {
        removeActive();
        rating.classList.add('active');

        selectedRating = rating.querySelector('small').innerText;
    }
});

// Handle send button
sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>    
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

// Remove active class
function removeActive() {
    ratings.forEach(rating => rating.classList.remove('active'));
}