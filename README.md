<h1>:musical_keyboard: JavaScript piano</h1>

<h2>Project Description</h2>

-- Personal project --
This is a piano which can be played either by clicking on the keys or by pressing keys on your keyboard.

<h2>Sources I used, and what I did/added</h2>

I used <a href="https://codepen.io/zastrow/pen/kxdYdk">this CodePen</a> by Philip Zastrow for building the piano keyboard (HTML and CSS).
My JavaScript code was inspired by Wes Bos's JavaScript 30's <a href="https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit">JavaScript Drum Kit</a> which I did as a code-along project. I used his JavaScript code as a basis for my 'keydown' listener function.

:exclamation: What I did:

<ul>
<li>Added an event listener function for 'on click' event to play the note once a key has been clicked on</li>
<li>Created "whitePlaying" and "blackPlaying" classes for keys that had been pushed (via the keyboard), and added the corresponding CSS</li>
<li>Created a function to remove this "whitePlaying"/"blackPlaying" classes and corresponding styling, upon 'key up' event.</li>
<li>Added a description test and a notes chart image.</li>

<h2>Tech used</h2>

HTML, CSS, JavaScript
