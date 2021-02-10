

const elements = [document.querySelector("aside"), document.querySelector(".arrow div")];
const className = ["showAside", "arrowRotate"];

class Aside {
    constructor() { 
        this.elements = [document.querySelector("aside"), document.querySelector(".arrow div")];
        this.className = ["showAside", "arrowRotate"];
        this.classNamePortr = ["showAsideTop", "arrowRotateTop"];

        document.querySelector(".arrow").addEventListener("click", this.toggleVar.bind(this));
    }

    toggleVar(e) {
        let className = ""
        if (window.matchMedia("(orientation: portrait)").matches) {
            className = this.classNamePortr
          }
        else if (window.matchMedia("(orientation: landscape)").matches) {
            className = this.className
          }
        const child = e.target.matches(".arrow div, .arrow div *");
        
        if (child) {
           
            for(let i = 0; i < this.elements.length; i++ ){
                this.elements[i].classList.toggle(className[i]);
        }
        
        }
}
}

const aside = new Aside()


const words =  ["arbuz", "banan", "cytryna", "dzik", "elf", "foka", "gitara", "hamburger", "igła", "jabłko", "kot", "lis", "motyl", "niedźwiedź", "okno", "pies", "rower", "serce", "telefon", "ucho", "xrays", "yeti", "wilk", "ząb" ];
const medal = document.querySelector(".medal img");
const mainImg =  document.querySelector(".mainImg img");
const hearts = document.querySelectorAll(".heart li i");
let pointNumber = 0; 
let buttonNbr = 1;
let solutionNbr = 0;

class StartGame {
    constructor() {
        this.letters = [...document.querySelectorAll(".alphabet li")];
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].addEventListener("click", this.clickSideLetter)
        }
    }
   
    clickSideLetter() {
        this.caption = document.querySelector(".caption");
        this.caption.innerText = "Wybierz literkę!";
        this.newGame = new NewGame();
        this.newGame.clearFields(); 
        let alphabetLetter = this.innerText;
        let firstLetter;
        this.words = words;
       
        
        for (let i = 0; i < this.words.length; i++)  {
            let word = this.words[i]
            firstLetter = word.charAt(0);
         
            if(firstLetter.toUpperCase() === alphabetLetter){
                mainImg.src =`WORDS_GAME/`+`../img/words/${word.toLowerCase()}.svg`;
                this.newGame.checkCorrectLetter(word, this.caption);
            }
        }
    }
}

const startGame = new StartGame();
class WordsBuilder {
    constructor() {
        this.words = words;
        this.lettersUl = document.querySelector(".letters ul");
        this.solutionUl = document.querySelector(".solution ul");
    }

    resetUl(ul) {
       while(ul.firstChild){
           ul.removeChild(ul.firstChild)
       }
    }
    
    createLetters(letter, ul) {
       this.newLi = document.createElement("li");
       this.newLi.innerText = letter;
       ul.appendChild(this.newLi);
    }

    createInput(letter, ul, nbr) {
        this.newLi = document.createElement("li");
        this.newLi.innerText = "";
        this.newLi.setAttribute("data-letter", letter);
        this.newLi.setAttribute("data-nbr", nbr);
        ul.appendChild(this.newLi);
     }

    mixLetters(word) {
        this.wordArr = Array.from(word);
        this.randomOne = new RandomLetter;
        this.firstRdmLet = this.randomOne.letter;
        this.randomTwoe = new RandomLetter;
        this.secondRdmLet = this.randomTwoe.letter;
        this.wordArr.push(this.firstRdmLet, this.secondRdmLet)
        return this.wordArr
    }

    getLetter(word, ul) {
        this.wordLenght = word.length;
        for (let i = 0; i < this.wordLenght; i++) {
            let letter = word.slice(i, i+1);
            this.createLetters(letter, ul);
        }
    }
    
    getInput(word, ul) {
        this.wordLenght = word.length;
        for (let i = 0; i < this.wordLenght; i++) {
            let letter = word.slice(i, i+1);
            let nbr = i;
            nbr++;
            this.createInput(letter, ul, nbr);    
        }
    }   
}

class ButtnDisabled {
    disable(button) {
        button.style.backgroundColor = "#95AFC0";
        button.style.color = "rgba(235,235,235, 0.8)";
        button.style.boxShadow = "0px 0px 0px 0px #3A336B";
        button.style.textShadow = "0.5px 0.5px 0.5px #95AFC0, 0 0 0 #000, 0.5px 0.5px 0.5px #95AFC0";
        button.dataset.status = "disabled" ;
    }

    addLetter(solutionField, buttonLetter) {
       solutionField.innerText = buttonLetter;
    }
}
class RandomLetter {
    constructor () {
        this.alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
        this.letter = this.drawLetter(this.alphabet);
    }

    drawLetter(alphabet){
        const alphabetArr = alphabet.split("");
        let i = Math.floor(Math.random() * alphabetArr.length);
        const letter = alphabetArr[i];
        return letter
    }
}

class Permut {
    constructor(word) {
        this.permutationArr = this.findPermutations(word);
        let max = this.permutationArr.length;
        let randomInt = this.getRandomInt(max);
        this.mixedword = this.permutationArr[randomInt];  
    }

    findPermutations(string) {
        if (!string || typeof string !== "string"){
          return "Please enter a string"
        }
        else if (string.length < 2 ){
          return string
        }
        let permutationsArray = [] 
        for (let i = 0; i < string.length; i++){
          let char = string[i]
          if (string.indexOf(char) != i) 
          continue
          let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);
          for (let permutation of this.findPermutations(remainingChars)){
            permutationsArray.push(char + permutation) }
        }
        return permutationsArray
    }
    getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * max);
    }
}

class Points {
    addPoint() {
        console.log(pointNumber)
        hearts[pointNumber].style.color = "#EB4D4B";
        pointNumber++
    }

    giveMedal() {
        if(pointNumber === 6) {
        medal.src = "img/score/sky.jpg"
        }
    }

    resetPoinst(){
        medal.src = "img/score/medal.svg";
        mainImg.src = "img/words/sowa.svg";
        hearts.forEach(element => {
        element.style.color = "#C3CFD9";

        });
    }

}


class UpDownSun {
    updown() {
        const sunFace = document.querySelector(".sun img:last-child");
        sunFace.classList.add("animationSunFace" );
        
        setTimeout(function() {
            sunFace.classList.remove("animationSunFace" );
        }, 2000)
    }
}




class Hint {
    constructor(lettersUl, solutionUl) {
        this.hintBtn = document.getElementById("hint");
        this.hintBtn.addEventListener("click", this.getHint.bind(this));
        this.lettersUl = lettersUl;
        this.solutionUl = solutionUl;
    }

    getHint() {
     
        this.wordsBuilder = new WordsBuilder();  
        this.solutionBtns = this.solutionUl.querySelectorAll("li");
        this.solutionBtn = this.solutionBtns[solutionNbr];
        this.solutionBtn.innerText = this.solutionBtn.getAttribute("data-letter");
        this.letterBtns = this.lettersUl.querySelectorAll("li");

        
        this.letterBtns.forEach(btn => {
        
            if( btn.innerText == this.solutionBtn.innerText) {

                    const letter = btn.innerText;
            

                    for(let i = 0; i < this.letterBtns.length; i++) {
                         if(letter == this.letterBtns[i].innerText) {
                  
                        const butttonDisable = new ButtnDisabled;
                        butttonDisable.disable(this.letterBtns[i] );
                       
                        break;
                    }
                    
                   
                    }
                   
                if (this.solutionBtn.innerText)
                console.log("jest super")
               
           }
             
        
        })
      
        buttonNbr ++;
        solutionNbr++;

      
    }
    
}


class NewGame {
    constructor() {
        this.newGameBtn = document.getElementById("newGame");
        this.wordsBuilder = new WordsBuilder();
        this.lettersUl = this.wordsBuilder.lettersUl;
        this.solutionUl = this.wordsBuilder.solutionUl;
        this.points = new Points();
        this.hints = new Hint(this.lettersUl, this.solutionUl);
        this.newGameBtn.addEventListener("click", this.gameReset.bind(this));
    }

    clearFields() {
        // console.log(this.lettersUl)
        this.wordsBuilder.resetUl(this.lettersUl);  
        this.wordsBuilder.resetUl(this.solutionUl); 
        
    }
    gameReset(){
        // console.log(this.lettersUl)
        this.clearFields();
        for (let i = 0; i < 5; i++){
            this.newLi = document.createElement("li");
            this.newLi.innerText = "";
            this.lettersUl.appendChild(this.newLi);
        }

        for (let i = 0; i < 4; i++){
                this.newLi = document.createElement("li");
                this.newLi.innerText = "";
                this.solutionUl.appendChild(this.newLi);
        }
        this.points.resetPoinst()
       
       
    }

    checkCorrectLetter(word, caption){
        const captionTxt = caption
        const wordRandomLetters = this.wordsBuilder.mixLetters(word).join("");
        const newPermut= new Permut(wordRandomLetters);
        const mixedWord = newPermut.mixedword;
        const newImg = this.wordsBuilder.getLetter(mixedWord, this.lettersUl);
        const newInput = this.wordsBuilder.getInput(word, this.solutionUl);

        
        this.letterBtns = this.wordsBuilder.lettersUl.querySelectorAll("li");
        this.solutionBtns = this.wordsBuilder.solutionUl.querySelectorAll("li");
        
        buttonNbr = 1;

        for (let i = 0; i < this.letterBtns.length; i++) { this.letterBtns[i].addEventListener("click", () => {    
                 
            this.button = this.letterBtns[i];

               
            this.solution =  this.solutionUl;
            this.solutionField = this.solution.querySelector(`li:nth-child(${buttonNbr})`);
            const buttonLetter = this.button.innerText;
            const solutionLetter = this.solutionField.getAttribute("data-letter");

            if (solutionLetter.toUpperCase() === buttonLetter) {
                const butttonDisable = new ButtnDisabled;
                butttonDisable.disable(this.button);
                butttonDisable.addLetter(this.solutionField, buttonLetter);

                buttonNbr++;
                solutionNbr++;
                const newsun = new UpDownSun;
                newsun.updown();
            }
                       
            if (this.solutionField.getAttribute("data-nbr") == this.solutionBtns.length) {
            captionTxt.innerText = "Brawo! Wyraz gotowy!";
           
            this.points.addPoint()                       
            }
            this.points.giveMedal()
            })
        }
    }
}

const newGame = new NewGame