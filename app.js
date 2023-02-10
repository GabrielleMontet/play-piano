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

//function to listen to key clicked on, and play the corresponding note by selecting the audio file that has the same class as the key that was clicked on

function playSoundOnClick(e) {
  const audio = document.querySelector(`audio[class="${e.target.className}"]`);
  audio.play();
}
window.addEventListener('click', playSoundOnClick);

//functions to play the 'note recognition' game 
const notesList = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let notesPlayed = [];

function randomNotes() {
  for (let i=1; i<=4; i++) {
  setTimeout(playNote, 2000*i);
}
}

function playNote() {
  let index = Math.floor(Math.random() * 100) % notesList.length;
  let id = notesList[index];
  let audioElement = document.getElementById(id);
  notesPlayed.push(id);
  audioElement.play();
}
let gameButton = document.getElementById("gameButton");
gameButton.addEventListener('click', randomNotes);

// functions to open and close the game form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//check if the notes have been correctly recognised
let resultButton = document.getElementById("resultButton");
resultButton.addEventListener('click', checkResult);
function checkResult() {
  let radioButtonsNote1 = document.querySelectorAll('input[name="note1"]');
  let radioButtonsNote2 = document.querySelectorAll('input[name="note2"]');
  let radioButtonsNote3 = document.querySelectorAll('input[name="note3"]');
  let radioButtonsNote4 = document.querySelectorAll('input[name="note4"]');
  let pointsCount = 0;
    //check first note
  for (const radioButton of radioButtonsNote1) {
      if (radioButton.checked) {
          let selectedNote1 = radioButton.value;
          if (selectedNote1 == notesPlayed[0]) {
            pointsCount = pointsCount + 1;
          }
          break;
      }
    }
    //check second note
    for (const radioButton of radioButtonsNote2) {
      if (radioButton.checked) {
        let selectedNote2 = radioButton.value;
        if (selectedNote2 == notesPlayed[1]) {
          pointsCount = pointsCount + 1;
        }
          break;
      }
  }
    //check third note
    for (const radioButton of radioButtonsNote3) {
      if (radioButton.checked) {
          let selectedNote3 = radioButton.value;
          if (selectedNote3 == notesPlayed[2]) {
            pointsCount = pointsCount + 1;
          }
          break;
      }
  }
    //check fourth note
    for (const radioButton of radioButtonsNote4) {
      if (radioButton.checked) {
          let selectedNote4 = radioButton.value;
          if (selectedNote4 == notesPlayed[3]) {
            pointsCount = pointsCount + 1;
          }
          break;
      }
  }
  output.innerText = `You got ${pointsCount} note(s) right`;
}