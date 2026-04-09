const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Get user
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    createErrorCard("No profile found");
  }
}

// Get repos
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Error loading repos");
  }
}

// Create user card
function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar"/>
      </div>
      <div class="user-info">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || "No bio available"}</p>
        <ul>
          <li>${user.followers}<strong> Followers</strong></li>
          <li>${user.following}<strong> Following</strong></li>
          <li>${user.public_repos}<strong> Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  main.innerHTML = cardHTML;
}

// Error card
function createErrorCard(msg) {
  main.innerHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;
}

// Add repos
function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach(repo => {
    const repoLink = document.createElement("a");

    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;

    reposEl.appendChild(repoLink);
  });
}

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value.trim();

  if (user) {
    getUser(user);
    search.value = "";
  }
});