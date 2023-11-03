
const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeslider = document.querySelector(".volume-slider input");
const keyscheckbox = document.querySelector(".keys-checkbox input");
let allkeys = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"]; // Add all the key values here
let audio = new Audio();

const playTune = (key) => {
    audio.src = `tunes/${key.toLowerCase()}.wav`;
    audio.play();
}

pianokeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

volumeslider.addEventListener("input", handleVolume);
function handleVolume(e) {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}
keyscheckbox.addEventListener("click", showHideKeys);

const pressedKey = (e) => {
    if (allkeys.includes(e.key)) playTune(e.key);
}
document.addEventListener("keydown", pressedKey);

