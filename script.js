
var startTime;
var doneTime;
let startTimer;
 
function getRandomWord() {
 let words;
 fetch('words.json')
 .then(res => res.json())
 .then(res => {
     words = res;
     do {
      var randomIndex = Math.floor(Math.random() * words.length);
     } while (words[randomIndex].length < 20)
     //console.log(words[randomIndex])
     //console.log(words[randomIndex].length)
     const givenWord = document.querySelector('#givenWord')
     givenWord.innerHTML = words[randomIndex]
     givenWord.classList.add("text-center")
     givenWord.classList.add("animate__animated")
     givenWord.classList.add("animate__fadeOut")
     givenWord.classList.add("animate__delay-3s");
     
     })
 
     startTime = new Date().getSeconds();
     //console.log(startTime) 
     const timer = document.querySelector('#timer');
     let zero = 0;
     timer.innerHTML = `: ${zero.toString()}`;
     startTimer = setInterval (
       () => {
         zero++;
         timer.innerHTML = `: ${zero.toString()}`;
         
       }, 1000
     )
     

     
   } 


const input = document.querySelector("#input");
input.addEventListener('keyup', (e) => { 
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("button").click();
    let checkResult =  document.querySelector('#checkResult');
    checkResult.classList.remove('animate__animated');
    checkResult.classList.remove('animate__flash');
    let timeToSpell = document.querySelector('#timeToSpell');
    timeToSpell.classList.remove('animate__animated');
    timeToSpell.classList.remove('animate__zoomIn');
   
  }
});


var button = document.querySelector('#button');
button.addEventListener('click', clickButton);


function clickButton() {
  doneTime = new Date().getSeconds();
  const word = document.querySelector('#givenWord');
  word.classList.remove("animate__animated");
  word.classList.remove("animate__fadeOut");
 
  
  checkWord ();
  getRandomWord();
 

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
    let checkResult =  document.querySelector('#checkResult');
    checkResult.innerHTML = 'Right';
    checkResult.classList.add('animate__animated');
    checkResult.classList.add('animate__flash');
    let timeToSpell = document.querySelector('#timeToSpell');
    timeToSpell.innerHTML = `Time to spell the word: ${time} sec`;
    timeToSpell.classList.add('animate__animated');
    timeToSpell.classList.add('animate__zoomIn');
    
  } else {
    let checkResult =  document.querySelector('#checkResult');
    checkResult.innerHTML = 'Wrong';
    checkResult.classList.add('animate__animated');
    checkResult.classList.add('animate__flash');
    let timeToSpell = document.querySelector('#timeToSpell');
    timeToSpell.innerHTML = `Time to spell the word: ${time} sec`;
    timeToSpell.classList.add('animate__animated');
    timeToSpell.classList.add('animate__zoomIn');
   
  }
  document.querySelector('#input').value ='';

}
   

