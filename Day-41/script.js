// Get elements
// We will fetch 50 random users and display them in a list.
// The input field will filter the list of users by name and
// location as you type, without making additional API calls.
const result = document.getElementById("result");
// Store list items for filtering
const filter = document.getElementById("filter");
// Store list items for filtering
const listItems = [];

// Fetch and display users
// We will fetch 50 random users from the API and display them in a list.
async function getData() {
  // Fetch 50 random users from the API
  const res = await fetch("https://randomuser.me/api?results=50");
  // Parse the JSON response and extract the results
  const { results } = await res.json();
  // Clear the result container before displaying new users
  result.innerHTML = "";
  // Loop through the results and create list items for each user
  results.forEach((user) => {
    // Create a list item for each user and store it in the listItems array for filtering
    const li = document.createElement("li");
    // Add the list item to the listItems array for filtering
    listItems.push(li);
    // Set the inner HTML of the list item to display the user's picture, name, and location
    li.innerHTML = `
        
            <img src="${user.picture.large}" alt="${user.name.first}">
            
            <div class="user-info">
                   
                <h4>${user.name.first} ${user.name.last}</h4>
              
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
    // Append the list item to the result container to display it on the page
    result.appendChild(li);
  });
}

// Filter users (NO API here)
// We will filter the list of users by name and location as you type, without making additional API calls.
function filterData(searchTerm) {
    // Loop through the list items and check if the user's name or location includes the search term
  listItems.forEach((item) => {
    // Check if the user's name or location includes the search term (case-insensitive)
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        // If it does, remove the "hide" class to show the item
      item.classList.remove("hide");
      // If it doesn't, add the "hide" class to hide the item
    } else {
        // If it doesn't, add the "hide" class to hide the item
      item.classList.add("hide");
      //
    }
  });
}

// Input event
// Add an event listener to the input field to filter the list of users as you type
filter.addEventListener("input", (e) => filterData(e.target.value));

// Load data
// Call the getData function to fetch and display the users when the page loads
getData();
