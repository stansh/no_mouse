/* import words from '/node_modules/an-array-of-english-words/index.js';
console.log(words.length) */

/* window.onload = document.getElementById('input').focus(); */
var startTime;
var doneTime;
 
function getRandomWord() {
 let words;
 fetch('node_modules\\an-array-of-english-words\\index.json')
 .then(res => res.json())
 .then(res => {
     words = res;
     do {
      var randomIndex = Math.floor(Math.random() * words.length);
     } while (words[randomIndex].length < 15)
     console.log(words[randomIndex])
     console.log(words[randomIndex].length)
     const givenWord = document.querySelector('#givenWord')
     givenWord.innerHTML = words[randomIndex]
     givenWord.classList.add("animate__animated")
     givenWord.classList.add("animate__fadeOut")
     givenWord.classList.add("animate__delay-3s");
    
     })
     
   } 




const input = document.querySelector("#speltWord");
input.addEventListener('keydown', () => {
input.value.length == 0 ? startTime = Number(event.timeStamp.toFixed(0)) : input.removeEventListener('keydown', null)
  
});




var button = document.querySelector('#button');
button.addEventListener('click', () => {
  doneTime = Number(event.timeStamp.toFixed(0)); 
  const word = document.querySelector('#givenWord')
  word.classList.remove("animate__animated")
  word.classList.remove("animate__fadeOut")
  checkWord ();
  getRandomWord();
});


function checkWord () {
  let time = ((doneTime - startTime) / 1000).toFixed(1);
  document.querySelector('#checkResult').innerHTML = ''
  const enteredWord = document.querySelector('#speltWord').value;
  console.log(enteredWord)
  const renderedWord = document.querySelector('#givenWord').innerHTML;
  console.log(renderedWord)
  if (enteredWord === renderedWord) {
    document.querySelector('#checkResult').innerHTML = 'Right';
    document.querySelector('#timer').innerHTML = `Time to spell the word: ${time} sec`;

  } else {
    document.querySelector('#checkResult').innerHTML = 'Wrong'
    document.querySelector('#timer').innerHTML = `Time to spell the word: ${time} sec`;
  }
  
  console.log('start time ', startTime)
  console.log('done time ',doneTime)
  
  console.log('timer',time)
  

}
   
  
