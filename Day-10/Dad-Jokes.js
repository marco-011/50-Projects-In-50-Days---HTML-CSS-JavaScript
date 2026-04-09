const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener('click', generatejoke)

generatejoke();

function generatejoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}


// 🔥 Where to Find APIs (IMPORTANT)

// You can get data like this from:

// 🌐 RapidAPI

// 🌐 JSONPlaceholder

// 🌐 OpenWeather

// 🌐 TheCatAPI