//function to listen to key pressed and play the corresponding note
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function if there is no audio corresponding to the key code of the key that was pressed
    audio.currentTime = 0; //reset to the start, in case same key is pressed several times in quick sucession
    audio.play();
    //check if key pressed corresponds to a white key or a black key, to apply 'activated' styling
    if (e.keyCode <= 75 && e.keyCode >= 65) {
      key.classList.add("whitePlaying");
    }
    else if (e.keyCode <= 53 && e.keyCode >= 49) {
      key.classList.add("blackPlaying");
    }
}
window.addEventListener('keydown', playSound);

//remove the 'active' styling once key has stopped playing
function onKeyUp(e) {
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
  if (e.keyCode <= 75 && e.keyCode >= 65) {
    key.classList.remove("whitePlaying");
  }
  else if (e.keyCode <= 53 && e.keyCode >= 49) {
    key.classList.remove("blackPlaying");
  }
}
window.addEventListener('keyup', onKeyUp);

//function to listen to key clicked on, and play the corresponding note
document.querySelector(".key").addEventListener("click", playSoundOnClick);

function playSoundOnClick(e) {
  const audio = document.querySelector(`audio[class="${e.target.className}"]`);
  audio.play();
}
window.addEventListener('click', playSoundOnClick);
