// Select all small cups (NodeList)
const smallcup = document.querySelectorAll('.cup-small');

// Get elements for displaying data
const liters = document.getElementById('Liters'); // remaining liters text
const percentage = document.getElementById('percentage'); // percentage fill
const remained = document.getElementById('remained'); // remaining container

// Loop through each small cup and add click event
smallcup.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx); // call function with index
    })
})

// Function to highlight cups based on clicked index
function highlightCups(idx) {

    // If clicked cup is already full AND next cup is not full → decrease index
    // (this allows user to unselect cups)
    if (
        smallcup[idx].classList.contains('full') &&
        !smallcup[idx].nextElementSibling?.classList.contains('full')
    ) {
        idx--;
    }

    // Loop through all cups
    smallcup.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full'); // fill cups up to clicked index
        } else {
            cup.classList.remove('full'); // remove fill from others
        }
    });

    updateBigCup(); // update main display
}

// Function to update big cup UI
function updateBigCup() {

    // Count how many cups are filled
    const fullCups = document.querySelectorAll('.cup-small.full').length;

    // Total number of cups
    const totalCups = smallcup.length;

    // If no cups are filled
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        // Show percentage
        percentage.style.visibility = 'visible';

        // Set height based on fill level
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;

        // Show percentage text
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    // If all cups are filled
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        // Show remaining water
        remained.style.visibility = 'visible';

        // Calculate remaining liters
        // Each cup = 250ml → convert to liters
        liters.innerText = `${(2 - (250 * fullCups) / 1000).toFixed(2)}L`;
    }
}