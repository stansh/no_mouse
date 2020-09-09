/* import words from '/node_modules/an-array-of-english-words/index.js';
console.log(words.length) */


 let words;
 fetch('node_modules\\an-array-of-english-words\\index.json')
 .then(res => res.json())
 .then(res => {
     words = res;
     let randomIndex = Math.floor(Math.random() * words.length);
     let wordLength =  words[randomIndex].length;
     if (wordLength < 10) {
        randomIndex = Math.floor(Math.random() * words.length)

     const givenWord = document.querySelector('#givenWord')
     givenWord.innerHTML = words[randomIndex]
     
        })
 .then(res => console.log(words))
 