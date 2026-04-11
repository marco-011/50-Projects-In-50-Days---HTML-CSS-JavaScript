// Select draggable element and all drop zones
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Attach drag events to draggable item
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Attach drag events to each drop container
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);   // Allow dropping
    empty.addEventListener('dragenter', dragEnter); // Highlight when entering
    empty.addEventListener('dragleave', dragLeave); // Remove highlight when leaving
    empty.addEventListener('drop', dragDrop);       // Handle drop action
}

// Triggered when drag starts
function dragStart() {
    this.classList.add('hold'); // Add hold style to dragged element
    
    // Delay to hide original element while dragging
    setTimeout(() => this.classList.add('invisible'), 0);
}

// Triggered when drag ends
function dragEnd() {
    this.className = 'fill'; // Reset to original class
}

// Allow drop by preventing default behavior
function dragOver(e) {
    e.preventDefault();
}

// Highlight drop zone when item enters
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

// Remove highlight when item leaves
function dragLeave() {
    this.classList.remove('hovered');
}

// Handle drop event
function dragDrop() {
    this.classList.remove('hovered'); // Remove highlight
    this.append(fill); // Move draggable element into new container
}
