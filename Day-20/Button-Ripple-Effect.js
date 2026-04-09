// Select all elements with class 'ripple'
const buttons = document.querySelectorAll('.ripple')

// Loop through each button
buttons.forEach(button => {

    // Add click event listener to each button
    button.addEventListener('click', function(e) {

        // Get mouse click position (relative to viewport)
        const x = e.clientX
        const y = e.clientY

        // Get button position from top and left of page
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // Calculate click position inside the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        
        // Create a new span element for ripple effect
        const circle = document.createElement('span')

        // Add class 'circle' (used for styling animation in CSS)
        circle.classList.add('circle')

        // Set position of ripple inside button
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // Add ripple element inside the button
        this.appendChild(circle)

        // Remove ripple after 500ms (animation duration)
        setTimeout(() => circle.remove(), 500)

    })
})