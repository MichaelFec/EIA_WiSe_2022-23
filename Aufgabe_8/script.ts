// Arrays und Variablen//

var Sounds: string [] = [("./task_material/assets/DrumPad/A.mp3"), ("./task_material/assets/DrumPad/C.mp3"), ("./task_material/assets/DrumPad/F.mp3"), ("./task_material/assets/DrumPad/G.mp3"), 
("./task_material/assets/DrumPad/hihat.mp3"), ("./task_material/assets/DrumPad/kick.mp3"), ("./task_material/assets/DrumPad/laugh-1.mp3"), ("./task_material/assets/DrumPad/laugh-2.mp3"), 
("./task_material/assets/DrumPad/snare.mp3")];

var beat: string []= [Sounds [4], Sounds [5], Sounds [8]];

var zaehler: number = 0;



//Funktionen// 

window.addEventListener("load", addClickListenersDrumPad);

function playSample(soundQuelle: string): void {
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function playBeat(): void {
    setInterval(function (): void {
        playSample (beat[zaehler]);
        zaehler ++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}

function addClickListenersDrumPad(): void {

document.querySelector(".button1").addEventListener("click", function(): void {playSample(Sounds[0]); });
document.querySelector(".button2").addEventListener("click", function(): void {playSample(Sounds[1]); });
document.querySelector(".button3").addEventListener("click", function(): void {playSample(Sounds[2]); });
document.querySelector(".button4").addEventListener("click", function(): void {playSample(Sounds[3]); });
document.querySelector(".button5").addEventListener("click", function(): void {playSample(Sounds[4]); });
document.querySelector(".button6").addEventListener("click", function(): void {playSample(Sounds[5]); });
document.querySelector(".button7").addEventListener("click", function(): void {playSample(Sounds[6]); });
document.querySelector(".button8").addEventListener("click", function(): void {playSample(Sounds[7]); });
document.querySelector(".button9").addEventListener("click", function(): void {playSample(Sounds[8]); });
document.querySelector(".playbutton").addEventListener("click", function (): void {playBeat(); });
  }