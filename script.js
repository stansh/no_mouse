/* import words from '/node_modules/an-array-of-english-words/index.js';
console.log(words.length) */

/* window.onload = document.getElementById('input').focus(); */
var startTime;
var doneTime;
let startTimer;
 
function getRandomWord() {
 let words;
 fetch('node_modules\\an-array-of-english-words\\index.json')
 .then(res => res.json())
 .then(res => {
     words = res;
     do {
      var randomIndex = Math.floor(Math.random() * words.length);
     } while (words[randomIndex].length < 7)
     console.log(words[randomIndex])
     console.log(words[randomIndex].length)
     const givenWord = document.querySelector('#givenWord')
     givenWord.innerHTML = words[randomIndex]
     givenWord.classList.add("animate__animated")
     givenWord.classList.add("animate__fadeOut")
     givenWord.classList.add("animate__delay-3s");
     
     })
 
     startTime = new Date().getSeconds();
     console.log(startTime) 

     
   } 


const input = document.querySelector("#input");
input.addEventListener('keyup', () => { 
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});


var button = document.querySelector('#button');
button.addEventListener('click', clickButton);


function clickButton() {
  /* doneTime = Number(event.timeStamp.toFixed(0));  */
  doneTime = new Date().getSeconds();
  const word = document.querySelector('#givenWord');
  word.classList.remove("animate__animated");
  word.classList.remove("animate__fadeOut");
  checkWord ();
  getRandomWord();
  const timer = document.querySelector('#timer');
  let zero = 0;
  timer.innerHTML = `: ${zero.toString()}`;
  startTimer = setInterval (
    () => {
      zero++;
      timer.innerHTML = `: ${zero.toString()}`;
      
    }, 1000
  )
    
};


function checkWord () {
  clearInterval(startTimer);
  console.log('start time ', startTime);
  let time = doneTime - startTime;
  let enteredWord = document.querySelector('#input').value;
  console.log(enteredWord)
  let renderedWord = document.querySelector('#givenWord').innerHTML;
  console.log(renderedWord)
  if (enteredWord === renderedWord) {
    const card = document.querySelector('.card');
    
    card.classList.remove("d-none");
    /* card.classList.add("d-block"); */
    document.querySelector('.card-title').innerHTML = 'Right';
    document.querySelector('.card-text').innerHTML = `Time to spell the word: ${time} sec`;

  } else {
    document.querySelector('.card-title').innerHTML = 'Wrong';
    document.querySelector('.card-text').innerHTML = `Time to spell the word: ${time} sec`;
   
  }
  document.querySelector('#input').value ='';

}
   

