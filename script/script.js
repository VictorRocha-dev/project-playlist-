let nameMusic = document.getElementById("nameMusic");
let artist = document.getElementById("artist");
let audioSource = document.getElementById("audioSource");
let audio = document.getElementById("audio");
let playMsc = document.getElementById("play");
let timeStart = document.getElementById("timeStart");
let timeEnd = document.getElementById("timeEnd");
let musicRange = document.getElementById("musicRange");
let soundRange = document.getElementById("soundRange");
let sound = document.getElementById("sound");
let container = document.getElementById("container");
let imagecontainer = document.getElementById("image_container");

let arrayMusic = [
    {
        name: "Quer Voar",
        singer: "Matue",
        file: "./assets/audios/quer-voar.mp3",
        image: "./assets/images/img-voar.jpg"
    },

    {
        name: "Não me sinto mal mais",
        singer: "Sidoka",
        file: "./assets/audios/Sidoka-n-me-sinto-mal-mais.mp3",
        image: "./assets/images/img-nmalmais.jpg"
    },

    {
        name: "Porsche",
        singer: "Sidoka",
        file: "./assets/audios/Sidoka-Porsche.mp3",
        image: "./assets/images/img-porsche.png"
    },

    {
        name: "Bala Azul",
        singer: "Teto",
        file: "./assets/audios/Teto-Bala Azul.mp3",
        image: "./assets/images/img-balaazul.jpg"
    }

];


let musicIndex = 0;



function player(musicIndex){
    nameMusic.innerText = arrayMusic[musicIndex].name;
    artist.innerText = arrayMusic[musicIndex].singer;
    audioSource.src = arrayMusic[musicIndex].file;

    imagecontainer.innerHTML = `<img src="${arrayMusic[musicIndex].image }" alt="imagem musica">`

    audio.load();

}

player(musicIndex)

let playing = false;

function play(){
    if(playing == false){
        audio.play();
        playMsc.setAttribute("src" , "./assets/images/play-buttton.png")
        return playing = true;
    }
    else{
        audio.pause();
        playMsc.setAttribute("src" , "./assets/images/pause.png")
        return playing = false;

    }
}
function back(){
    if(musicIndex == 0){
        musicIndex == arrayMusic.length;
        player(musicIndex)
        playing = false;
        play();
    }
    else{
        musicIndex--;
        player(musicIndex);
        playing = false;
        play();

    }
}
function next(){
    if(musicIndex == arrayMusic.length){
        musicIndex = 0;
        player(musicIndex);
        playing = false;
        play();
    }else{
        musicIndex++;
        player(musicIndex);
        playing = false;
        play();

    }
}

function changeSong(){
    let totalTime = audio.duration;
    let currentTime = audio.currentTime;

    if(currentTime == totalTime){
        next();
    }
}

musicRange.addEventListener("input" , time);

function time(){
    audio.currentTime = musicRange.value;
}


function timing(){
    musicRange.max = audio.duration;
    musicRange.value = audio.currentTime

    let minutes = Math.floor(audio.currentTime/60);
    let seconds = Math.round(audio.currentTime % 60);
    let minutesTotal = Math.floor(audio.duration / 60);
    let secondsTotal = Math.round(audio.duration % 60);

    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    if (minutesTotal < 10){
        minutesTotal = "0" + minutesTotal;
    }
    if (secondsTotal < 10){
        secondsTotal = "0" + secondsTotal;
    }

    timeStart.innerText = minutes + ":" + seconds;
    timeEnd.innerText = minutesTotal + ":" + secondsTotal;


    changeSong(); 
}

setInterval(timing, 1000);

