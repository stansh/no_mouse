/* import words from '/node_modules/an-array-of-english-words/index.js';
console.log(words.length) */

/* window.onload = document.getElementById('input').focus(); */

 
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
     })
     
   } 


var startTime;
var doneTime;

const input = document.querySelector("#speltWord");
input.addEventListener('keydown', () => {
  
input.value.length == 0 ? startTime = Number(event.timeStamp.toFixed(0)) : input.removeEventListener('keydown', null)
  
});




var button = document.querySelector('#button');
button.addEventListener('keydown', () => {
  
  event.keyCode === 13 ? button.click() : '';
  doneTime = Number(event.timeStamp.toFixed(0)); 
  checkWord ();

});


function checkWord () {

  document.querySelector('#checkResult').innerHTML = ''
  const enteredWord = document.querySelector('#speltWord').value;
  console.log(enteredWord)
  const renderedWord = document.querySelector('#givenWord').innerHTML;
  console.log(renderedWord)
  if (enteredWord === renderedWord) {
    document.querySelector('#checkResult').innerHTML = 'Right'
  } else {
    document.querySelector('#checkResult').innerHTML = 'Wrong'
  }
  
  console.log('start time ', startTime)
  console.log('done time ',doneTime)
  let time = doneTime - startTime;
  console.log('timer',time)
  getRandomWord()

}
   
  
