// Arrays und Variablen//

var Sounds: string [] = [("./task_material/assets/DrumPad/A.mp3"), ("./task_material/assets/DrumPad/C.mp3"), ("./task_material/assets/DrumPad/F.mp3"), ("./task_material/assets/DrumPad/G.mp3"), 
("./task_material/assets/DrumPad/hihat.mp3"), ("./task_material/assets/DrumPad/kick.mp3"), ("./task_material/assets/DrumPad/laugh-1.mp3"), ("./task_material/assets/DrumPad/laugh-2.mp3"), 
("./task_material/assets/DrumPad/snare.mp3")];

var beat: string []= [Sounds [4], Sounds [5], Sounds [8]];

var zaehler: number = 0;
var beatremix: number;
var interval: number ;


//Funktionen// 

window.addEventListener("load", addClickListenersDrumPad);

function playSample(soundQuelle: string): void {
    var sound = new Audio(soundQuelle);
    sound.play();
}


//Remix//
function REMIX (): void {
  
  
    document.querySelector("#remix").addEventListener("click", function (): void {
        
         beatremix = setInterval(function (): void {
            playSample( beat [zaehler] );
            zaehler = Math.floor(Math.random () * 9);
            },
            500);
        });
    
 }
//Play-Button//
function myBeat(): void {
  playSample(beat[zaehler]);
  zaehler += 1;
  if (zaehler > (beat.length - 1))
      zaehler = 0;
  
}

function PlayBeat(): void {
  


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
document.querySelector("#play").addEventListener("click", PlayBeat);
document.querySelector("#remix").addEventListener("click", function (): void {REMIX(); });
  }
