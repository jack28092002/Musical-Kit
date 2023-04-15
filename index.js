for (var i=0 ; i<document.querySelectorAll(".instrument").length ; i++ ){
  document.querySelectorAll(".instrument")[i].addEventListener("click",function (){

    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);

})


var currentI = null;
var currentKey = null;
var mapping = {
  "g" : "Music/Guitar.mp3",
  "p" : "Music/Piano.mp3",
  "d" : "Music/Drum.mp3",
  "s" : "Music/Saxophone.mp3",
  "h" : "Music/Harmonica.mp3",
  "f" : "Music/Flute.mp3",
}
function makesound(key){
  if(currentI !== null){
    currentI.pause();
  }
  if(currentKey !== key){
    currentKey = key;
    currentI = new Audio(mapping[key]);
    currentI.play();
}
}

//
// function makesound(key){
//   switch (key) {
//     case "g":
//       var guitar = new Audio('Music/Guitar.mp3');
//       current=g;
//       guitar.play();
//     break;
//     case "p":
//       var piano = new Audio('Music/Piano.mp3');
//       piano.play();
//     break;
//     case "d":
//       var drum = new Audio('Music/Drum.mp3');
//       drum.play();
//     break;
//     case "s":
//       var saxophones = new Audio('Music/Saxophone.mp3');
//       saxophones.play();
//     break;
//     case "h":
//       var harmonica = new Audio('Music/Harmonica.mp3');
//       harmonica.play();
//     break;
//     case "f":
//       var flute = new Audio('Music/Flute.mp3');
//       flute.play();
//     break;
//
//     default:
//       console.log(buttonInnerHTML);
//
//   }
// }
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
