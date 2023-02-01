var numberOfButtons = document.querySelectorAll(".drum").length;
console.log(numberOfButtons);
for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", clickhandling);

  function clickhandling() {
    var audio_secected = this.innerHTML;
    make_sound(audio_secected);
    buttonANimation(audio_secected);
  }
}
document.addEventListener("keypress", function (event) {
  make_sound(event.key);
  buttonANimation(event.key);
});

function make_sound(key) {
  switch (key) {
    case "w":
      var audioo = new Audio("sounds/tom-1.mp3");
      audioo.play();
      break;
    case "a":
      var audioo = new Audio("sounds/tom-2.mp3");
      audioo.play();
      break;
    case "s":
      var audioo = new Audio("sounds/tom-3.mp3");
      audioo.play();
      break;
    case "d":
      var audioo = new Audio("sounds/tom-4.mp3");
      audioo.play();
      break;
    case "j":
      var audioo = new Audio("sounds/tom-5.mp3");
      audioo.play();
      break;
    case "k":
      var audioo = new Audio("sounds/tom-6.mp3");
      audioo.play();
      break;
    case "l":
      var audioo = new Audio("sounds/tom-7.mp3");
      audioo.play();
      break;
    default:
      alert(this.innerHTML);
  }
}
function buttonANimation(current_key) {
  var activeButton = document.querySelector("." + current_key);
}
