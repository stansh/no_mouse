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
     } while (words[randomIndex].length < 10)
     console.log(words[randomIndex])
     console.log(words[randomIndex].length)
     const givenWord = document.querySelector('#givenWord')
     givenWord.innerHTML = words[randomIndex]
     })

   } 

  /*  const button = document.getElementById("button");
let mousedownTime;

button.addEventListener('mousedown', () => {
  mousedownTime = new Date().getTime();
});

button.addEventListener('mouseup', function () {
  const mouseupTime = new Date().getTime(),
        timeDifference = mouseupTime - mousedownTime;
  alert(`Button held down for ${timeDifference}ms`);
}); */

   
         
    