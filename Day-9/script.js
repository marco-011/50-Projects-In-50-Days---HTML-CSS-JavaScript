const sound = [
  "crocodile-mugiwara",
  "doflamingo-laugh",
  "kaido-laugh_ltGCtUs",
  "nya_2xyALFL",
  "one-piece-brooks-laugh",
  "one-piece-ost-cornered-raid-host",
];
sound.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopsongs()
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});


function stopsongs() {
  sound.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

// const sounds = [
//   'crocodile-mugiwara',
//   'doflamingo-laugh',
//   'kaido-laugh_ltGCtUs',
//   'nya_2xyALFL',
//   'one-piece-brooks-laugh',
//   'one-piece-ost-cornered-raid-host'
// ]

// const container = document.getElementById('buttons')

// let currentAudio = null

// sounds.forEach(name => {
//   const btn = document.createElement('button')
//   btn.className = 'btn'
//   btn.textContent = name

//   btn.onclick = () => {
//     if (currentAudio) currentAudio.pause()

//     currentAudio = new Audio(`sounds/${name}.mp3`)
//     currentAudio.play()
//   }

//   container.appendChild(btn)
// })
