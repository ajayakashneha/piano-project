let audio = document.querySelector("audio");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let img = document.querySelector("#image");
let playButton = document.querySelector(".play");
let volumeControl = document.querySelector(".volume input");
let current = document.querySelector("current-time");
let duration = document.querySelector(".duration");

let isPlaying = false;

let i = 0;
let songArray = [
    "music/Chhath.mp3",
    "music/Jode Jode Falwa - Pawan Singh ! Palak, Chorus ! Chhath Puja ! Bhakti ! Bhojpuri.mp3",
    "music/Uga Ho Surooj Dev ! Anuradha Paudwal ! Chhath Puja.mp3",
    "music/kishor-deka-ek-khavab-39294-61070.mp3"
];

let imageArray = [
    "images/download (1).jpeg",
    "images/download (3).jpeg",
    "images/download (4).jpeg",
    "images/download (2).jpeg"
];

next.addEventListener("click", () => {
    i++;
    if (i >= songArray.length) {
        i = 0;
    }
    audio.setAttribute("src", songArray[i]);
    audio.play();
    img.setAttribute("src", imageArray[i]);
});

previous.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = songArray.length - 1;
    }
    audio.setAttribute("src", songArray[i]);
    audio.play();
    img.setAttribute("src", imageArray[i]);
});

let num = 1;
playButton.addEventListener("click", () => {
    if (num === 0) {
        audio.pause();
        playButton.setAttribute("src", "images/3695059_music_play_play button_player_icon.png");
        num = 1;
    } else {
        audio.play();
        playButton.setAttribute("src", "images/3695047_media player_music_pause_player_icon.png");
        num = 0;
    }



});

const volumerange = (e) =>{
    audio.volume =e.target.value
}
volumeControl.addEventListener("input" ,volumerange)