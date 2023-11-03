let previous = document.querySelector("#previous")
let next = document.querySelector("#next")
let audio = document.querySelector("#audio")
let img = document.querySelector("#img")
let pause = document.querySelector("#pause")
let i = 0;
let songArray = [
    "mp3-songs/song-1.mp3",
    "mp3-songs/song-3.mp3",
    "mp3-songs/song-4.mp3"
]

let imageArray = [
    "images/along-img.jpg",
    "images/Doll-girl.jpg",
    "images/doll-img.jpg"
]

next.addEventListener("click", () => {
    i++;
    if (i > songArray.length)
        i = 0;
    audio.setAttribute("src", songArray[i])
    audio.play();
})

previous.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = songArray.length;
    audio.setAttribute("src", songArray[i])
    audio.play();

})

next.addEventListener("click", () => {
    i++;
    if (i > imageArray.length)
        i = 0;
    img.setAttribute("src", imageArray[i])
})

previous.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = imageArray.length;
    img.setAttribute("src", imageArray[i])
})
let num = 1;
pause.addEventListener("click", () => {
    if (num === 0) {
        audio.pause()
        pause.setAttribute("src" , "images/play.png")
        num = 1;
    }
    else {
        audio.play()
        pause.setAttribute("src" , "images/pause.png")
        num = 0;
    }

})