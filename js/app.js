//var hamburger = document.getElementById("hamburger");
var hamburger = document.querySelector("#hamburger");
var menu = document.querySelector("nav");

hamburger.addEventListener("click", openNav);

function openNav(event) {

    event.preventDefault();

   // alert("You clicked!");
   if(menu.classList.contains("open")) {
        menu.classList.remove("open");
   } else {
        menu.classList.add("open");
   }
}

// Music player

var audio = document.querySelector("#my-audio");
var audioBtn = document.querySelector("#audio-btn");

audioBtn.addEventListener("click", function(event){
     event.preventDefault();

     if(audio.paused) {
          audio.play();
          audioBtn.textContent = "Stop music";
     } else {
          audio.pause();
          audioBtn.textContent = "Play music";
     }

});