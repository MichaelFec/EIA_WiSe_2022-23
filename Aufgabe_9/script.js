// Arrays und Variablen//
var Sounds = [("./task_material/assets/DrumPad/A.mp3"), ("./task_material/assets/DrumPad/C.mp3"), ("./task_material/assets/DrumPad/F.mp3"), ("./task_material/assets/DrumPad/G.mp3"),
    ("./task_material/assets/DrumPad/hihat.mp3"), ("./task_material/assets/DrumPad/kick.mp3"), ("./task_material/assets/DrumPad/laugh-1.mp3"), ("./task_material/assets/DrumPad/laugh-2.mp3"),
    ("./task_material/assets/DrumPad/snare.mp3")];
var beat = [Sounds[4], Sounds[5], Sounds[8]];
var zaehler = 0;
var beatremix;
var interval;
//Funktionen// 
window.addEventListener("load", addClickListenersDrumPad);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
//Remix//
function REMIX() {
    document.querySelector("#remix").addEventListener("click", function () {
        beatremix = setInterval(function () {
            playSample(beat[zaehler]);
            zaehler = Math.floor(Math.random() * 9);
        }, 500);
    });
}
//Play-Button//
function myBeat() {
    playSample(beat[zaehler]);
    zaehler += 1;
    if (zaehler > (beat.length - 1))
        zaehler = 0;
}
function PlayBeat() {
    //Wiedergabe//
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        interval = setInterval(myBeat, 350);
        //Stopp//
    }
    else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(interval);
    }
}
function addClickListenersDrumPad() {
    document.querySelector(".button1").addEventListener("click", function () { playSample(Sounds[0]); });
    document.querySelector(".button2").addEventListener("click", function () { playSample(Sounds[1]); });
    document.querySelector(".button3").addEventListener("click", function () { playSample(Sounds[2]); });
    document.querySelector(".button4").addEventListener("click", function () { playSample(Sounds[3]); });
    document.querySelector(".button5").addEventListener("click", function () { playSample(Sounds[4]); });
    document.querySelector(".button6").addEventListener("click", function () { playSample(Sounds[5]); });
    document.querySelector(".button7").addEventListener("click", function () { playSample(Sounds[6]); });
    document.querySelector(".button8").addEventListener("click", function () { playSample(Sounds[7]); });
    document.querySelector(".button9").addEventListener("click", function () { playSample(Sounds[8]); });
    document.querySelector("#play").addEventListener("click", PlayBeat);
    document.querySelector("#remix").addEventListener("click", function () { REMIX(); });
}
//# sourceMappingURL=script.js.map