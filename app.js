// document.querySelector("#button2").addEventListener("click",function(){
//     document.querySelector(".popup").classList.add("active");
// });
// document.querySelector(".popup .close-btn").addEventListener("click",function(){
//     document.querySelector(".popup").classList.remove("active");
// });

function change() { 
    const overlay = document.getElementById('popup'); 
    overlay.classList.toggle('show'); 
} 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function navSlide(){
  const nav = document.querySelector(".navbar");
  const menu = document.querySelector(".menu2");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click",()=>{

      menu.classList.toggle("nav-active");

  burger.classList.toggle("toggle")    

  })

}

navSlide();


let rotate = () => {
  let rotext = document.getElementById('rotate');
  let normal =document.getElementsByClassName('normal');
  // rotext.style.transform = 'rotate(360deg)';
  rotext.classList.toggle("normal")

}

let rotate1 = () => {
  let rotext = document.getElementById('rotate1');
  let normal =document.getElementsByClassName('normal1');
  // rotext.style.transform = 'rotate(360deg)';
  rotext.classList.toggle("normal1")

}



// const videoElement = document.querySelector('video');
// const playPauseButton = document.querySelector('button');

// playPauseButton.addEventListener('click', () => {
// 	playPauseButton.classList.toggle('playing');
// 	if (playPauseButton.classList.contains('playing')) {
// 		videoElement.play();
// 	}
// 	else {
// 		videoElement.pause();
// 	}
// });

// videoElement.addEventListener('ended', () => {
// 	playPauseButton.classList.remove('playing');
// });








// let rotateImage = () => {
//   let img = document.getElementById('myimage');
//   img.style.transform = 'rotate(180deg)';
// }