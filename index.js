let img = document.getElementById("img");
let tex = document.getElementById("text");
let liv = document.getElementById("lives");
let move = document.getElementById("moves");
let chec = document.getElementById("check");
let live = 6;
let RandomWord=[];
let oneletter;

fetch('word.txt') 
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text =>{
        RandomWord = text.split('\n');
        game(RandomWord);
    })
    .catch(error =>{
        console.error('There was a problem with the fetch operation:', error);
    });

function game(RandomWord){
    let words = RandomWord[Math.floor(Math.random() * RandomWord.length)];
    oneletter = words;
    console.log(oneletter);
   let one  = oneletter.split('');

   for(let i = 0;i < one.length; i++){
       one[i]= '_'
   }
   let letter = one.join(' ');
   tex.innerHTML = letter;
   liv.innerHTML =  `You have ${live} moves`;
}

function lett(input){
    let guess =  input;
    console.log(input)
    let guessLetter = tex.innerHTML.trim();
    let randomW = oneletter.trim();

    if(randomW.includes(guess)){
        let newWord ='';
        for(let i = 0; i < randomW.length; i++){
            if(randomW[i] === guess){
                newWord += guess;
            }else{
                newWord += guessLetter[i];
            }
        }
        tex.innerHTML = newWord;

        if(newWord === randomW){
            move.innerHTML =`You win`;
            chec.innerHTML =`Word was ${randomW}`;
        }
    }else{
        live--;
        liv.innerHTML = `You have ${live} moves`;
        img.src=`hangman ${live}.png`;
    }
    if(live < 1){
        liv.innerHTML =`You lose`;
        chec.innerHTML =`Word was ${randomW}`;
        
    }
   
}