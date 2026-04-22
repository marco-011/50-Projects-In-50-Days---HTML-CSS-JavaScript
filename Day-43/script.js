// Get the range input element
const range = document.getElementById("slider");

// Add event listener to track slider movement
range.addEventListener("input", (e) => {

  // Get current slider value (convert to number)
  const value = +e.target.value;

  // Get the label element (next sibling of input)
  const label = e.target.nextElementSibling;

  // Get computed width of range input and label
  const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");

  // Convert width from string (e.g., "300px") to number (300)
  const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

  // Get min and max values of range
  const max = +e.target.max;
  const min = +e.target.min;

  // Calculate label position based on slider value
  const left =
    value * (numWidth / max) -        // position relative to slider width
    numLabelWidth / 2 +              // center the label
    scale(value, min, max, 10, -10); // adjust for thumb offset

  // Apply calculated position to label
  label.style.left = `${left}px`;

  // Update label text with current value
  label.innerHTML = value;
});

// Trigger input event once on page load to set initial position
range.dispatchEvent(new Event("input"));

// Helper function to scale values from one range to another
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (
    ((num - in_min) * (out_max - out_min)) /
      (in_max - in_min) +
    out_min
  );
};